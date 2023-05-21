const numero1Input = document.getElementById('num1');
const operacionSelect = document.getElementById('op');
const numero2Input = document.getElementById('num2');

function doOperator(){
	const numero1 = parseFloat(numero1Input.value);
	const operacion = operacionSelect.value;
	const numero2 = parseFloat(numero2Input.value);

	let resultado;
	if (operacion === '+') {
		resultado = numero1 + numero2;
	}
	else if (operacion === '-') {
		resultado = numero1 - numero2;
	}
	else if (operacion === '*') {
		resultado = numero1 * numero2;
	}
	else if (operacion === '/') {
		if (numero2 === 0){
			alert("It's over 9000");
			console.log("It's over 9000");
			return ;
		}
		resultado = numero1 / numero2;
	}
	else if (operacion === '%') {
		if (numero2 === 0){
			alert("It's over 9000");
			console.log("It's over 9000");
			return ;
		}
		resultado = numero1 % numero2;
	}
	alert(numero1+" "+operacion+" "+numero2+" = "+resultado);
	console.log(numero1+" "+operacion+" "+numero2+" = "+resultado);
}

document.querySelector('form').addEventListener('submit', function (event) {
	event.preventDefault();
	doOperator();
});