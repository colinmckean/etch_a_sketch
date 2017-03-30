var drawLine = function(context,currentPosition, mod, value){
  context.beginPath();
  context.moveTo(currentPosition.x, currentPosition.y);
  currentPosition[mod] += value;
  context.lineTo(currentPosition.x, currentPosition.y);
  context.stroke();
}

var app = function() {
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext('2d');
  var currentPosition = { y: 5, x: 5 }

  window.onkeydown = function(e){
    switch(e.which) {
      case 87: drawLine(context,currentPosition, "y", -5);
        break;
      case 83: drawLine(context,currentPosition, "y", 5);
        break;
      case 65: drawLine(context,currentPosition, "x", -5);
        break;
      case 68: drawLine(context,currentPosition, "x", 5); 
        break;
    }
  }
};

window.onload = app;