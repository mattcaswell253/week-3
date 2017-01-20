//user logic
$(document).ready(function() {
	$("form#pingpong").submit(function(event) {
		var number = parseInt($('input#firstNum').val());
		for (var index = 1; index <= number; index += 1) {
   {
				$('ul#list').append("<li>" + index + "</li>");
			}
		};
    event.preventDefault();
		$('#results').show()
	});
});
