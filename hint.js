var target = { x:1254, y:393 };
$(document).ready(function() {
  var clickCount = 0;
  var befWidth = $(window).width();

  $("#waldo").click(function(event){
    var distance = getDistance(event, target);
    clickCount += 1;

    var getHint = function(distance) {
      switch (true) {
        case distance < 15:
          return({message: "Го најде Грујо во " + clickCount + " клика!", bg: "#1CC000"});
      }
    }
    var hintText = getHint(distance);
    showHint(hintText);
    var hideMessage = function() {
      $("#hint").text("");
      $(".hint-div").css("background", "none");
    }
    var hideHint = setTimeout(hideMessage, 500);
  })
  
	target = { x: $(window).width() * 0.72569, y: ($(window).width() * 0.72569) * 0.313397 };

	$( window ).resize(function() {
	  console.log( "" + $( window ).width());
	  target = { x: $(window).width() * 0.72569, y: ($(window).width() * 0.72569) * 0.313397 }
	  
	});
	var getDistance = function(event, target) {
	  var diffX = event.offsetX - target.x;
	  var diffY = event.offsetY - target.y;
	  return Math.sqrt((diffX * diffX) + (diffY * diffY))
	};

});



var showHint = function(hint) {
	if (hint) {
  $("#hint").text(hint.message);
	$(".hint-div").css("background", hint.bg);}
}
