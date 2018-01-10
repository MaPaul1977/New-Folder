var noTicks = 0
var count = 0
var btncount = 0
var pcount = 0
var title = $(document).attr("title");

function tick(){
	if (noTicks < 4) {
		noTicks += 1;
	} else {
		noTicks = 0;
	}
	console.log("tick");
	checkLife();
};

function checkLife(){
	$(".eCount").each(function() {
		var data = $( this ).data();
		data.timeleft -= 1;
		if (data.timeleft < 1) {
			$( this ).remove();
		};
	});
}

$(document.body).click(function() {
	var add = '<button class="eCount" data-timeleft=5 onclick="button()">Button</button>';
	count += 1;
	document.title = "Title - " + count
	if (count > 50) {
		$(document.body).append(add);
		btncount += 1;
	}
});

function button() {
	var add = '<p class="eCount" data-timeleft=10 onclick="p()"> Paragraph </p>';
	count += btncount;
	document.title = "Title - " + count
	if (count > 500) {
		$(document.body).append(add);
		pcount += 5;
	}
}

function p() {
	count += pcount;
	document.title = "Title - " + count
}

var beginGame = setInterval(function() {
tick();
}, 1000);