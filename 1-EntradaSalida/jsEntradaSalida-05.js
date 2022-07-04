/*
Diego Leonardo Gloria Salas
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	
	// Usa los espacios de manera literal y se usa con con backticks
	//alert (`Usted se llama ${nombre} y tiene ${edad}`);

	alert("Usted se llama "+nombre+" y tiene "+edad+" años");
}

