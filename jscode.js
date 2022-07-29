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

