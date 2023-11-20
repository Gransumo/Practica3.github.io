
document.addEventListener("DOMContentLoaded", function(event) {
	var week_days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
	var div_days = document.getElementById("days");
	var ul_days = document.createElement("ul");
	for (var i = 0; i < week_days.length; i++) {
		var li_day = document.createElement("li");
		li_day.innerHTML = week_days[i];
		ul_days.appendChild(li_day);
	}
	ul_days.setAttribute("class", "list-inline");
	div_days.appendChild(ul_days);
});
