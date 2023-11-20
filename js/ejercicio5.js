
function charCount(str, c) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] == c)
			count++;
	}
	return count;
}

document.addEventListener("DOMContentLoaded", function(event) {
	event.preventDefault();
	var boton = document.getElementById("calcular");
	var resultado_div = document.getElementById("resultado");
	var resultado = "";
	boton.addEventListener("click", function(event) {
		var string = document.getElementById("string").value;
		for (let i = 97; i <= 122; i++) {
			let c = String.fromCharCode(i);
			resultado += c + ": " + charCount(string, c) + ", ";
		}
		resultado += "<br>";
		for (let i = 65; i <= 90; i++) {
			let c = String.fromCharCode(i);
			resultado += c + ": " + charCount(string, c) + ", ";
		}
		resultado_div.innerHTML = resultado;
	});
});
