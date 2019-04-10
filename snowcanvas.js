
window.onload=function(){
    var canvas= document.querySelector('canvas');

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    
    
    var c=canvas.getContext('2d');

    var mf=100;
    var flakes=[];
   
  
  c.fillStyle="white";
  
    for(var i=0;i<mf;i++){
        flakes.push({
            x:Math.random()*window.innerWidth,
            y:Math.random()*window.innerHeight,
            r:Math.random()*5+2,
            d:Math.random()+1 //speed
        })
        }
  
    function drawFlakes(){
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.fillStyle="white";
        c.beginPath()
      for(var i=0; i<mf;i++){
        var f=flakes[i];
        c.moveTo(f.x,f.y);
        c.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
      }
      c.fill();
      moveFlakes();
    }

    var angle=0;
    
    function moveFlakes(){
      angle+=0.1;
      for(var i=0; i<mf; i++){
        
        var f= flakes[i];
        f.y+=Math.pow(f.d,2)+1;
        f.x+=Math.sin(angle)+2;
        
        if(f.y>window.innerHeight){
          flakes[i]={x:Math.random()*window.innerWidth, y:0, r:f.r, d:f.d};
      }
       
        }
      
    }
  
  setInterval(drawFlakes, 25);
}