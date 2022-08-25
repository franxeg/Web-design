const envio = document.querySelector(".envio");
const nom = document.querySelector(".nom");
const mai = document.querySelector(".mai");
const tex = document.querySelector(".tex");
const iter = [nom, mai, tex];
const formu = document.getElementById("form")
const env = document.querySelector(".enviado")
const perisep = document.querySelector(".perilla-sep")

var pr = 1


formu.addEventListener("submit", async function(e){
	e.preventDefault();
	const for = new FormData(this)
	const response = await fetch(this.action, {
		method: this.method,
		body: formu,
		headers: {
			'Accept': 'application/json'
		}
	})
}
)

envio.onclick = ()=>{
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
		alert("Mensaje enviado correctamente, Gracias!!");
		env.removeAttribute("hidden");
		perisep.setAttribute("hidden", " ");

	}
}

