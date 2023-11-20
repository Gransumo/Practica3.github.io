
function validarWhy(why) {
	if (why.length < 40) {
		throw new FormError("El campo 'why' debe tener al menos 40 caracteres");
	}
}

function validarLenguaje(lenguaje) {
	if (!lenguaje) {
		throw new FormError("Seleccione un lenguaje de programación");
	}
}

function validarCFGS(CFGSs) {
	if (CFGSs.length == 0) {
		throw new FormError("Seleccione al menos un CFGS");
	}
}

function validarFecha(fechaIngresada) {

	if (fechaIngresada == "Invalid Date")
		throw new FormError("Ingrese una fecha válida");
	if (fechaIngresada < new Date())
		throw new FormError("La fecha debe ser posterior a la actual");
}

function validarFile(fileInput) {
	if (!fileInput)
		throw new FormError("Seleccione un archivo");
	if (fileInput.toLowerCase().endsWith(".pdf") == false)
		throw new FormError("El archivo debe ser un PDF");
}

function validarCFGS_Possibles(selectedValues) {
	if (selectedValues.length == 0)
		throw new FormError("Seleccione al menos un CFGS de los posibles");
}



function validarDatos() {
	var why = document.getElementById("why").value;
	var lenguaje = document.getElementById("lenguaje").value;
	var CFGSs = document.querySelectorAll('input[type="checkbox"]:checked');
	var fechaIngresada = new Date(document.getElementById("date").value);
	var file = document.getElementById("cv").value;
	var CFGS_Possibles = document.getElementById("CFGS_POSSIBLES");
	var selectedValues = Array.from(CFGS_Possibles.selectedOptions).map(option => option.value);
	try {
		validarWhy(why);
		validarLenguaje(lenguaje);
		validarCFGS(CFGSs);
		validarFecha(fechaIngresada);
		validarFile(file);
		validarCFGS_Possibles(selectedValues);
	} catch (correcciónErr) {
		if (correcciónErr instanceof FormError)
			throw correcciónErr;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	var form = document.getElementById("form");
	const notification = document.getElementById("notification");
	const notificationText = document.getElementById("notificationText");
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		try {
			validarDatos();
			notification.className = "alert alert-success alert-dismissible fade show";
			notificationText.innerHTML = "Formulario enviado correctamente";
		} catch (error) {
			if (error instanceof FormError) {
				notification.className = "alert alert-warning alert-dismissible fade show";
				notificationText.innerHTML = error.message;
			}
		}
	});
});
