// 画像の描画
function drawImage(canvas, image, x, y, width, height) {
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(x + width / 2, y + height / 2, width / 2, 0, 2 * Math.PI, false); // 円形のパスを作成
  ctx.clip(); // 画像を切り抜く
  ctx.drawImage(image, x, y, width, height); // 画像を描画
}

// 実行
const canvas = document.getElementById('canvas');
const images = [
  new Image(),
  new Image(),
  new Image()
];
images[0].src = "image.jpg";
images[1].src = "image1.jpg";
images[2].src = "image2.jpg";
let count = 0;
const radius = 200;
const startAngle = 0;
const angle = 2 * Math.PI / images.length;
images.forEach(image => {
  image.onload = function() {
    const x = canvas.width / 2 + radius * Math.cos(startAngle + angle * count);
    const y = canvas.height / 2 + radius * Math.sin(startAngle + angle * count);
    drawImage(canvas, image, x - image.width / 2, y - image.height / 2, image.width, image.height);
    count++;
  };
});
