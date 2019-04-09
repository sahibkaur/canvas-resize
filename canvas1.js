var canvas= document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

canvas.addEventListener("click", function(){
    var x = event.x;
  var y = event.y;

  c.clearRect(0,0,innerWidth,innerHeight);

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  var colorArray=['#686de0', '#95afc0', '#7ed6df', '#ff7979', '#ffbe76', '#badc58'];
for( var i=0; i<10; i++){
    xx=(Math.random()*100)+x;
    yy=(Math.random()*100)+y;
    radius=(Math.random()*30);
    if(xx+radius>window.innerWidth){
        xx-=radius;
    }
    if(xx<0){
        xx+=radius;
    }
    if(yy<0){
        yy+=radius;
    }
    if(yy+radius>window.innerHeight){
        yy-=radius;
    }
    var color=Math.floor(Math.random()*colorArray.length);
    c.beginPath();
    c.arc(xx,yy,radius,0,Math.PI*2,false);
    c.fillStyle=colorArray[color];
    c.fill();
}
  
});

var c=canvas.getContext('2d');

x=300;
y=200;
// function animate(){
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(x,y,20,0,Math.PI*2,false);
//     c.stroke();
//     x+=1;
//     y+=1;
//     requestAnimationFrame(animate);
// }
// animate();


