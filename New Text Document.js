var count = 0
var btncount = 0
var pcount = 0
var title = $(document).attr("title");

$("#b").click(function() {
	var add = '<button id="button" onclick="button()">Button</button>';
	count += 1;
	document.title = "Title - " + count
	if (count > 5) {
		$(document.body).append(add);
	}
});

function button() {
	var add = '<p id="p" onclick="p()"> Paragraph </p>';
	count += btncount;
	document.title = "Title - " + count
	if (count > 25) {
		$(document.body).append(add);
		pcount += 1;
		
	}
}

function p() {
	count += pcount;
	document.title = "Title - " + count
}
