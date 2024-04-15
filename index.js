// 円グラフの描画
function drawCircle(i, canvas,data,image,x,y,h,w) {
  let firstVal = 1.5;
  let ag=1.5;
  const total = data.reduce((a, b) => a + b, 0);
  for (let s=0;s<i;s++) {
    ag =(data[s] / total) *2+firstVal;
    firstVal=ag;
    if(ag>2){
      ag=ag-2;
    }
    console.info("ag:",i,ag)
  }
  let startAngle =ag;
  const ctx = canvas[i].getContext('2d');
  let endAngle = (data[i] / total) *2+startAngle;
  if (endAngle > 2) {
    endAngle = endAngle - 2;
  }
  ctx.beginPath();
  ctx.moveTo(canvas[i].width / 2, canvas[i].height / 2);
  ctx.arc(canvas[i].width / 2, canvas[i].height / 2, canvas[i].width / 2, startAngle * Math.PI, endAngle* Math.PI, false);
  ctx.stroke();
  ctx.clip();
  ctx.drawImage(images[i],x,y, h, w); // 画像全体を描画]
  startAngle = endAngle;
}

  
// 実行
const canvas = [];
const images = [];
const size = 8;
for(let tmps=1;tmps<=size;tmps++){
  canvas.push(document.getElementById('canvas'+tmps))
  images.push(new Image())
}
const data = [11, 9, 8,7,6,4,3,3];
// images[0].crossOrigin = "Anonymous";
// images[1].crossOrigin = "Anonymous";
images[0].src = "img/onepiece14_enel.png?" + new Date().getTime();
images[1].src = "img/onepiece01_luffy.png?" + new Date().getTime();
images[2].src = "img/doctor_isya_warui.png?" + new Date().getTime();
images[3].src = "img/onepiece16_moria.png?" + new Date().getTime();
images[4].src = "img/onepiece15_lucci.png?" + new Date().getTime();
images[5].src = "img/kintarou_sumou.png?" + new Date().getTime();
images[6].src = "img/fantasy_medusa.png?" + new Date().getTime();
images[7].src = "img/cooking_katakuriko.png?" + new Date().getTime();

images[0].onload = ()=> {
  drawCircle(0,canvas,data,images, 300,30, 300, 300)
}
images[1].onload =()=> {
  drawCircle(1,canvas,data,images, 400,270, 300, 300)
}
images[2].onload =()=> {
  drawCircle(2,canvas,data,images,130,350, 500, 500)
}
images[3].onload =()=> {
  drawCircle(3,canvas,data,images,80,380, 300, 300)
}
images[4].onload =()=> {
  drawCircle(4,canvas,data,images,0,200, 300, 300)
}
images[5].onload =()=> {
  drawCircle(5,canvas,data,images,20,70,400, 400)
}
images[6].onload =()=> {
  drawCircle(6,canvas,data,images,0,0, 400, 400)
}
images[7].onload =()=> {
  drawCircle(7,canvas,data,images,200,10, 200, 200)
}