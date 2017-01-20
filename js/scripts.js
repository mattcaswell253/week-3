//user logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {

    //business logic
    var number = parseInt($('input#firstNum').val());
    for (var index = 1; index <= number; index += 1) {
      if ((index % 3 === 0) && (index % 5 ===0)) {
        $('ul#list').append("<li>ping-pong</li>");
      } else if (index % 3 === 0) {
        $('ul#list').append("<li>ping</li>");
      } else if (index % 5 === 0) {
        $('ul#list').append("<li>pong</li>");
      } else {
        $('ul#list').append("<li>" + index + "</li>");
      }
    };
    event.preventDefault();
    $('#results').show()
  });
});
