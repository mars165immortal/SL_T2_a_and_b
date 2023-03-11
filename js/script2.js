$(document).ready(function() {
	// set initial color of each light
	$("#light1").css("background-color", "red");
	$("#light2").css("background-color", "green");
	$("#light3").css("background-color", "blue");
    $(".light").addClass("bright");

	// change color and brightness of selected light when color or brightness is changed
	$("#color-picker, #brightness-slider").on("change", function() {
		var selectedLight = $("#light-select").val();
		var newColor = $("#color-picker").val();
		var newBrightness = $("#brightness-slider").val();
		$("#" + selectedLight).css({
			"background-color": newColor,
			"filter": "brightness(" + (newBrightness / 100) + ")"
		});
	});

});
