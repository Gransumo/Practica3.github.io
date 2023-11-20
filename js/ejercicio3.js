function validarEmail(email) {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return email.match(regex);
}

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	const email = document.getElementById("email");
	const resultado = document.getElementById("resultado");
	
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		if (email.value == "")
			return;
		if (validarEmail(email.value))
			resultado.innerHTML = "Email válido";
		else
			resultado.innerHTML = "Email no válido";
	});
});
