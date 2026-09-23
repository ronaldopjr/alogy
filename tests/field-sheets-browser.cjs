// Run with Playwright available; optional BROWSER_EXECUTABLE_PATH and QA_OUTPUT.
const {chromium}=require('playwright');
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');const out=process.env.QA_OUTPUT||'/tmp/alogy-field-sheets-qa';fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}fs.readFile(file,(e,b)=>{if(e){res.writeHead(404).end();return;}res.setHeader('Content-Type',({'.js':'text/javascript','.html':'text/html','.css':'text/css','.webp':'image/webp'})[path.extname(file)]||'application/octet-stream');res.end(b);});});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_EXECUTABLE_PATH||undefined,args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});const errors=[];
try{
for(const type of ['temperatura','pressao','ph','vazao']){
 const context=await browser.newContext();const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('dialog',d=>d.accept().catch(()=>{}));await page.goto(`${base}/ficha-calibracao-${type}.html`);await page.waitForSelector('#preview .sheet');
 for(const width of [360,390,430,1280]){await page.setViewportSize({width,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${type} overflow ${width}`);await page.screenshot({path:path.join(out,`${type}-${width}.png`),fullPage:true});}
 assert.doesNotMatch(await page.locator('#print-root').innerText(),/ALOGY|Conhecer o Guia/);assert.match(await page.locator('#print-root').innerText(),/CONDIÇÕES AMBIENTAIS/);
 await page.locator('#collection').evaluate(e=>e.open=true);await page.fill('#ref-0-0','10,5');await page.fill('#ind-0-0','11,5');await page.fill('#ref-0-1','12,5');await page.fill('#ind-0-1','14,5');await page.fill('#ind-0-2','9');assert.match(await page.locator('#summary-0').innerText(),/Média ref.: 11,5.*Média ind.: 13.*Diferença.*1,5.*1 par\(es\) incompleto/);
 assert.doesNotMatch(await page.locator('#print-root').innerText(),/11,5|14,5/,'blank print excludes readings');
 await page.selectOption('#output-mode','filled');assert.match(await page.locator('#print-root').innerText(),/11,5/);
 await page.fill('#meta-startTemp','23,5');await page.fill('#meta-startHumidity','52');
 if(type==='ph'){assert.equal(await page.locator('#linear-config').isVisible(),false);await page.fill('#nominal-0','4');await page.fill('#point-0-buffer','Tampão pH 4');await page.fill('#point-0-lot','LOTE-A');await page.fill('#point-0-bufferRef','4,01');await page.fill('#point-0-solutionTemp','25');assert.match(await page.locator('#print-root').innerText(),/Temp\. da solução \(°C\): 25/);assert.match(await page.locator('#print-root').innerText(),/LOTE-A/);}
 if(type==='vazao'){await page.fill('#point-0-volume','10 L');await page.fill('#point-0-time','60 s');assert.match(await page.locator('#print-root').innerText(),/Volume: 10 L.*Tempo: 60 s/);}
 const downloaded=page.waitForEvent('download');await page.click('#export');const backup=await downloaded;const backupPath=path.join(out,`${type}.json`);await backup.saveAs(backupPath);const data=JSON.parse(fs.readFileSync(backupPath));assert.equal(data.meta.startTemp,'23,5');assert.equal(data.runs[0].points[0].readings[0].ref,'10,5');
 await page.reload();await page.click('#resume');await page.locator('#collection').evaluate(e=>e.open=true);assert.equal(await page.locator('#ref-0-0').inputValue(),'10,5');assert.equal(await page.locator('#meta-startHumidity').inputValue(),'52');
 await page.selectOption('#run-condition','Antes do ajuste');await page.click('#add-run');await page.selectOption('#run-condition','Depois do ajuste');assert.equal(await page.locator('#ref-0-0').inputValue(),'');await page.fill('#ref-0-0','20');await page.fill('#ind-0-0','21');await page.selectOption('#run-select','0');assert.equal(await page.locator('#ref-0-0').inputValue(),'10,5');assert.equal(await page.locator('#run-condition').inputValue(),'Antes do ajuste');
 await page.selectOption('#output-mode','filled');const pdfDownload=page.waitForEvent('download');await page.click('#pdf');await(await pdfDownload).saveAs(path.join(out,`${type}-filled.pdf`));
 await page.setInputFiles('#import',backupPath);await page.waitForFunction(()=>document.getElementById('message').textContent==='Backup restaurado.');assert.equal(await page.locator('#run-select option').count(),1);assert.equal(await page.locator('#ref-0-0').inputValue(),'10,5');
 await page.click('#duplicate');await page.waitForFunction(()=>document.getElementById('ref-0-0').value==='');assert.equal(await page.locator('#ref-0-0').inputValue(),'');assert.equal(await page.locator('#meta-startTemp').inputValue(),'');
 if(type!=='ph'){
 await page.fill('#cfg-low','0');await page.fill('#cfg-high','500');await page.locator('#cfg-high').blur();
 for(const n of [4,5,6,10]){await page.click(`[data-count="${n}"]`);assert.equal(await page.locator('.point').count(),n);const nom=await page.locator('[id^="nominal-"]').evaluateAll(es=>es.map(e=>e.value));assert.equal(nom.at(-1),'500');if(n===4)assert.equal(nom[1],'166,66666667');}
 await page.selectOption('#cfg-mode','step');await page.fill('#cfg-step','10');await page.locator('#cfg-step').blur();assert.equal(await page.locator('.point').count(),11);
 await page.fill('#cfg-low','-50,5');await page.fill('#cfg-high','49,5');await page.locator('#cfg-high').blur();assert.equal(await page.locator('#nominal-0').inputValue(),'-50,5');
 await page.fill('#cfg-high','-50,5');await page.locator('#cfg-high').blur();assert.equal(await page.locator('#pdf').isDisabled(),true);
 await page.fill('#cfg-high','49,5');await page.locator('#cfg-high').blur();assert.equal(await page.locator('#pdf').isDisabled(),false);
 await page.fill('#cfg-repetitions','7');await page.locator('#cfg-repetitions').blur();
 }
 await page.selectOption('#output-mode','blank');const blankDownload=page.waitForEvent('download');await page.click('#pdf');await(await blankDownload).saveAs(path.join(out,`${type}-blank.pdf`));await page.pdf({path:path.join(out,`${type}-print.pdf`),preferCSSPageSize:true});
 const layout=await page.locator('#print-root .sheet').evaluateAll(sheets=>sheets.map(s=>{const h=parseFloat(s.style.height)||277;return [...s.querySelectorAll('.sheet-cell')].filter(c=>parseFloat(c.style.top)+parseFloat(c.style.height)>h+.01).length;}));assert.ok(layout.every(n=>n===0),`${type} page bounds`);
 await context.close();console.log(type+': responsive widths, paired readings, blank/filled PDF, drafts, backup and separate series passed');
}
// Storage failure must remain visible, and exporting must still work.
const p=await browser.newPage();await p.addInitScript(()=>{Storage.prototype.setItem=function(){throw Error('blocked');};});await p.goto(base+'/ficha-calibracao-temperatura.html');await p.fill('#meta-startTemp','20');assert.match(await p.locator('#save-status').innerText(),/não conseguiu salvar/);assert.equal(errors.length,0,errors.join('\n'));
console.log('All browser checks passed. Output: '+out);
}finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
