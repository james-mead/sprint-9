$(document).ready(function () {

// number of circles
  var numElements = 200;
  var content = document.getElementById("container");

//populate container div with element divs
  for(var i = 0; i < numElements; i++) {
    content.innerHTML += '<div class="element"</div>'
  }

  $('.element').css({'position': 'absolute','height':'0', 'width':'0',
                    'border-radius':'50%',
                    'display': 'inline'});

//Set up initial positions and colours
  $.each($('.element'), function () {
    setRandomPosition(this);
    setRandomColour(this);
  });

//Give each element a random time in which to change (random) colour
  $('.element').each(function() {
      var $elem = $(this);
      var ranNum = Math.floor((Math.random() * 2000) + 1000);
      setInterval(function() {
          setRandomColour($elem);
      }, ranNum);
  });

//Give each element a rndom size in which to grow to, get a new random position after shrinking
  setInterval(function () {
    $.each($('.element'), function () {
      var size = Math.floor((Math.random() * 200) + 10);
      $(this).animate({'height': size, 'width': size}, 5000);
      $(this).animate({'height': '0', 'width': '0'}, 4000, function () { setRandomPosition(this); } );
  });
});

//set a random colour for @param target (a div of element class)
  function setRandomColour(target) {
    var colour = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $(target).css({'background-color': colour});
  }

//randomly generate a new position based on document's width and height
  function setRandomPosition(target) {
    x = Math.floor(Math.random() * $(document).width());
    y = Math.floor(Math.random() * $(document).height());
    $(target).css({'left': x, 'top': y});
  }

});
