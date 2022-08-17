const boton = document.querySelector(".boton");
const nom = document.querySelector(".nom");
const mai = document.querySelector(".mai");
const tex = document.querySelector(".tex");
const iter = [nom, mai, tex];


boton.onclick = ()=>{
	var comp = 0
	for (var i = 0; i < 3; i++){
		let cont = (iter[i]);
		if (cont.value == "") {
			return
		}
		else{
			comp ++
		}
	}
	if (comp == 3) {
		alert("Mensaje enviado correctamente, Gracias!! Esta pagina se cerrara.");
		window.close();
	}
}