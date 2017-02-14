$(document).ready(start)

function start() {
  $(document).on('mousemove', newCircle);
  $(document).on('keydown', keyCheck);

  var content = $('#content');

  // Create an audio element, so we don't have to keep making new ones
  var deleteSound = $('<audio>', {
    src: 'sounds/blop.mp3',
    volume: 0.3
  })
}

function newCircle() {
  var node = $('<div>', { 'class': 'circle' });
  content.append(node);
  setRandomPosition(node);
  setSize(node);
  setRandomColor(node);
}

function keyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID) {
      case 8:
      case 46:
        removeLastCircle();
        circleSound();
   }
}

function removeLastCircle() {
  $('.circle').last().remove();
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
  deleteSound.play()
}

