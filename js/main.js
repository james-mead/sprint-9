$(document).ready(function() {
document.addEventListener('mousemove', newCircle)
document.addEventListener("keydown", keyCheck);  //or however you are calling your method

// global variables
// var numItems = Math.floor(Math.random() * 2000);
var content = $('#content');
// var content = $('#circles')

function newCircle() {
  var node = document.createElement('div')
  content.append(node)
  node.classList.add('circle')
  setRandomPosition(node);
  setSize(node);
  setRandomColor(node);
}

function keyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
        removeLastCircle();
        circleSound();
      break;
      case 46:
        removeLastCircle();
        circleSound();
      break;
      default:
      break;
   }
}

function removeLastCircle() {
  $('.circle').last().remove()
}

function setRandomPosition(target) {
  var x = Math.floor(Math.random() * $(document).width());
  var y = Math.floor(Math.random() * $(document).height()) + $('header').height();
  $(target).css({'position': 'absolute', 'top': y, 'left': x, 'display': 'inline'});
}

function setSize(target) {
  var size = Math.floor(Math.random() * 70);
  $(target).css({'height': size+'px', 'width': size+'px', 'border-radius':'50%'});
}

function setRandomColor(target) {
  var color = '#'+Math.floor(Math.random()*16777215).toString(16);
  var opacity = Math.random();
  $(target).css({'background-color': color, 'opacity': opacity});
}

function circleSound() {
  var winFX = new Audio('sounds/blop.mp3');
  winFX.volume = 0.3;
  winFX.play();
}

})
