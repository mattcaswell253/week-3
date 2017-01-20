var result = function(number) {
  var output = "";
  if (number < 3) {
    return "1,2"
  }
}



//user logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
  event.preventDefault();
  var number = parseInt($("input#firstNum").val());

  var answer = result(number);
  $(".result").text(answer);

  })
})
