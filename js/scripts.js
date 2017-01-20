var result = function(number) {
var count;
for(count = 0; count <= number; count++){
  document.write(count + ",");
  document.write("<br/>")
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
