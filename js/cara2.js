
document.addEventListener("DOMContentLoaded", function() {
	const box = document.getElementById("text_box");
	box.onkeydown = function() {
		box.style.backgroundColor = "blue";
	};
	box.onkeyup = function() {
		box.style.backgroundColor = "red";
	}
});
