
function calcular_menores(n) {
	var menores = [];
	for (let i = 0; i < n; i++)
		menores.push(i);
	return menores;
}

function calcular_mayores(n) {
	var mayores = [];
	for (let i = n + 1; i <= 10; i++)
		mayores.push(i);
	return mayores;
}

function calcular(option){
	var n = parseInt(document.getElementById("num_entry").value);
	var result_div = document.getElementById("resultado");
	if (isNaN(n) || n < 0 || n > 10) {
		result_div.innerHTML = "Error: El número debe estar entre 0 y 10";
		return;
	}
	var array_result;
	var output = "";
	if (option == 1)
		array_result = calcular_menores(n);
	else
		array_result = calcular_mayores(n);
	for (let index = 0; index < array_result.length; index++) {
		output += array_result[index] + " ";
	}
	result_div.innerHTML = output;
}
