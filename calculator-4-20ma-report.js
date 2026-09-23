/* Lazy-loaded, brand-free A4 report. Uses the site's existing pdf-lib dependency. */
(function(root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./calculator-4-20ma-core.js'), require('./assets/fichas/vendor/pdf-lib.min.js'));
  else root.CurrentLoopReport = factory(root.CurrentLoop);
})(typeof window !== 'undefined' ? window : this, function(core, providedLibrary) {
  'use strict';
  let libraryPromise;
  async function getLibrary() {
    if (providedLibrary) return providedLibrary;
    if (window.PDFLib) return window.PDFLib;
    if (!libraryPromise) libraryPromise = new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      script.src='assets/fichas/vendor/pdf-lib.min.js';
      script.onload=()=>window.PDFLib?resolve(window.PDFLib):reject(Error('PDF library unavailable'));
      script.onerror=()=>{ script.remove(); libraryPromise=null; reject(Error('PDF library unavailable')); };
      document.head.append(script);
    });
    return libraryPromise;
  }
  async function create(result, options) {
    if (!result?.valid) throw Error('A valid calculation is required');
    const {t,locale}=options;
    const {PDFDocument,StandardFonts,rgb}=await getLibrary();
    const doc=await PDFDocument.create();
    doc.setTitle(t.title); doc.setSubject('Linear 4-20 mA conversion');
    doc.setCreator('Current loop calculator'); doc.setProducer('Current loop report');
    const page=doc.addPage([595.28,841.89]);
    const font=await doc.embedFont(StandardFonts.Helvetica), bold=await doc.embedFont(StandardFonts.HelveticaBold);
    const ink=rgb(.09,.18,.24), muted=rgb(.32,.40,.46), blue=rgb(.02,.39,.55), line=rgb(.83,.88,.91), tint=rgb(.95,.97,.98);
    const f=n=>n.toLocaleString(locale,{useGrouping:false,maximumFractionDigits:4,...(Math.abs(n)>=1e9||(Math.abs(n)>0&&Math.abs(n)<1e-4)?{notation:'scientific'}:{})});
    const unit=result.unit||'';
    const value=n=>f(n)+(unit?' '+unit:'');
    const safe=s=>String(s).replace(/−/g,'-').replace(/μ/g,'µ').replace(/\u202f|\u00a0/g,' ');
    // Common engineering units stay vector text. Uncommon Unicode is rendered at
    // 4x resolution rather than dropped or replaced in a downloaded report.
    async function text(str,x,y,size=11,fontUsed=font,color=ink,maxWidth) {
      str=safe(str);
      try {
        fontUsed.encodeText(str);
        if(maxWidth) size=Math.min(size,maxWidth/fontUsed.widthOfTextAtSize(str,1));
        page.drawText(str,{x,y,size,font:fontUsed,color});
      } catch(error) {
        if (typeof document==='undefined') throw error;
        const canvas=document.createElement('canvas'), ctx=canvas.getContext('2d'), scale=4;
        ctx.font=`${fontUsed===bold?'bold ':''}${size*scale}px Arial, sans-serif`;
        const width=ctx.measureText(str).width;
        if(maxWidth&&width>maxWidth*scale) size*=maxWidth*scale/width;
        canvas.width=Math.ceil((maxWidth||width/scale+2)*scale);canvas.height=Math.ceil(size*1.5*scale);
        ctx.font=`${fontUsed===bold?'bold ':''}${size*scale}px Arial, sans-serif`;
        ctx.fillStyle=`rgb(${Math.round(color.red*255)},${Math.round(color.green*255)},${Math.round(color.blue*255)})`;
        ctx.textBaseline='alphabetic';ctx.fillText(str,0,size*scale);
        const img=await doc.embedPng(canvas.toDataURL('image/png'));
        page.drawImage(img,{x,y:y-size*.5,width:canvas.width/scale,height:canvas.height/scale});
      }
    }
    function rule(y) {page.drawLine({start:{x:42,y},end:{x:553,y},thickness:.7,color:line});}
    await text(t.title,42,796,23,bold,ink,511);
    await text(t.reportDate+': '+new Date().toLocaleString(locale),42,776,9,font,muted);
    rule(761);
    await text(t.reportRange,42,738,13,bold);
    await text('LRV (4 mA): '+value(result.lrv),42,716,11,bold,ink,246);
    await text('URV (20 mA): '+value(result.urv),308,716,11,bold,ink,245);
    await text(t.amplitude+': '+value(Math.abs(result.delta))+' · '+(result.delta<0?t.reversed:t.increasing),42,695,10,font,muted,511);
    const inputUnit=result.mode==='ma'?'mA':result.mode==='percent'?'%':unit;
    const inputLabel=result.mode==='ma'?t.current:result.mode==='percent'?t.percent:t.eng;
    await text(t.reportInput+': '+inputLabel+' = '+f(result.input)+' '+inputUnit,42,676,10,font,ink,511);
    await text(t.reportResult,42,645,13,bold);
    page.drawRectangle({x:42,y:589,width:511,height:43,color:tint});
    const readings=[[t.current,f(result.ma)+' mA'],[t.percent,f(result.percent)+'%'],[t.eng,value(result.eng)]];
    for(let i=0;i<3;i++) {await text(readings[i][0],53+i*169,617,8,font,muted,151);await text(readings[i][1],53+i*169,598,16,bold,blue,151);}
    await text(result.inRange?t.ok:t.warn,42,572,9,font,result.inRange?muted:rgb(.6,.26,.03),511);
    const left=93,right=537,top=539,bottom=425;
    const low=Math.min(result.lrv,result.urv),high=Math.max(result.lrv,result.urv);
    const y=v=>bottom+(v-low)/(high-low)*(top-bottom);
    for(let i=0;i<5;i++) {
      const frac=i/4,yy=bottom+frac*(top-bottom),xx=left+frac*(right-left);
      page.drawLine({start:{x:left,y:yy},end:{x:right,y:yy},color:line,thickness:.5});
      page.drawLine({start:{x:xx,y:bottom},end:{x:xx,y:top},color:line,thickness:.5});
      await text(f(low+frac*(high-low)),42,yy-3,8,font,muted,42);
      await text(String(4+frac*16),xx-5,409,8,font,muted);
    }
    await text(unit||t.eng,left,550,9,font,muted,444);
    await text(t.signal,275,391,9,font,muted);
    page.drawLine({start:{x:left,y:y(result.lrv)},end:{x:right,y:y(result.urv)},color:blue,thickness:2});
    if(result.inRange) page.drawCircle({x:left+(result.ma-4)/16*(right-left),y:y(result.eng),size:4,color:blue,borderColor:rgb(1,1,1),borderWidth:1.5});
    await text(t.table,42,363,13,bold);
    page.drawRectangle({x:42,y:332,width:511,height:22,color:tint});
    for(let i=0;i<3;i++)await text([t.current,t.percent,t.scaled][i],53+i*169,339,9,bold,ink,151);
    const rows=core.table(result.lrv,result.urv);
    for(let i=0;i<rows.length;i++) {
      const row=rows[i],yy=312-i*18;
      if(i%2===1)page.drawRectangle({x:42,y:yy-6,width:511,height:18,color:rgb(.98,.985,.99)});
      const columns=[f(row.ma)+' mA',f(row.percent)+'%',value(row.eng)];
      for(let col=0;col<3;col++)await text(columns[col],53+col*169,yy,10,row.ma%4===0?bold:font,ink,151);
    }
    rule(155);
    await text(t.reportFormula,42,130,9,font,muted,511);
    await text(t.reportFormula2,42,114,9,font,muted,511);
    await text(t.reportNote,42,76,9,font,muted,511);
    return doc.save();
  }
  return {create};
});
