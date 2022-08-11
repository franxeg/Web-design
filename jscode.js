<<<<<<< HEAD
const peri = document.querySelector(".perilla")
const form = document.querySelector(".form");
const bomb = document.querySelector(".bombilla");
var pr = 1
peri.onclick = ()=>{
	prender(pr)
};

function prender(pre){
	if (pre == 0){
		peri.src = "off.jpg"
		form.setAttribute("hidden", " ")
		bomb.setAttribute("hidden", " ")
		pr = 1
		return
	}
	else if(pre == 1)
		peri.src = "on.jpg"
		pr = 0
		form.removeAttribute("hidden")
		bomb.removeAttribute("hidden")
	}

=======
const peri = document.querySelector(".perilla")
const form = document.querySelector(".form");
const bomb = document.querySelector(".bombilla");
var pr = 1
peri.onclick = ()=>{
	prender(pr)
};

function prender(pre){
	if (pre == 0){
		peri.src = "off.jpg"
		form.setAttribute("hidden", " ")
		bomb.setAttribute("hidden", " ")
		pr = 1
		return
	}
	else if(pre == 1)
		peri.src = "on.jpg"
		pr = 0
		form.removeAttribute("hidden")
		bomb.removeAttribute("hidden")
	}

//Hola Soy Franco Gonzalez, vivo en Lincoln pcia de Bs As, tengo 35 años, me dedico a realizar paginas web dinamicas. Hace un tiempo me adentre en el mundo de la programacion, me gustaria que pueda elegirme para sus proyectos, para poder crear juntos las soluciones informaticas que le puedan facilitar y automatizar la resolucion de problemas
>>>>>>> 31c4d15883ad0cad854a486a251e96841b17fb77
