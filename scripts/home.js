var mouseCoords = [];
var initialShadow = [9, 6, 4];
var libertad;


function bindMouseHover(item, textShadowValues){
  
  var itemX = window.innerWidth / 2;
  var itemY = item.offsetTop + (item.clientHeight / 2);
  item.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;

    if(x > itemX){
      textShadowValues[0] = Math.abs(textShadowValues[0]) * -1;
    }else{
      textShadowValues[0] = Math.abs(textShadowValues[0]);
    }

    if(y > itemY){
      textShadowValues[1] = Math.abs(textShadowValues[1]) * -1;
    }else{
      textShadowValues[1] = Math.abs(textShadowValues[1]);
    }

    applyTextShadow(item, textShadowValues);
  });
}

function applyTextShadow(item, textShadowValues){
  item.style.textShadow = 'blue ' + textShadowValues.join('px ') + 'px';
}

function showStars(){
  var canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  
}

window.onload = function(){
  libertad = document.querySelector('.libertad');
  bindMouseHover(libertad, initialShadow);
  showStars();
}