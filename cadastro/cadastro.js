let termosTxt = document.querySelector('.descricao > a');
termosTxt.addEventListener('click', ()=>{
	console.log("Termos de uso clicados");
	const termosPage = document.createElement('div');
	termosPage.classList = 'tela-termos';

	const header = document.createElement('div');
	header.classList = "itens";

	const texto = document.createElement('h2');
	texto.innerHTML = "Termos de uso";

	const iconX = document.createElement('i')
	iconX.classList = "fas fa-times";

	const termosCaixa = document.createElement('div')
	termosCaixa.classList = "termos-caixa";

	const termosTexto = document.createElement('p');
	termosTexto.innerHTML = `Lorem ipsum pellentesque quam curabitur per consectetur diam vestibulum molestie, eleifend porttitor nostra risus lobortis porta faucibus interdum odio, lacinia pulvinar platea aliquet netus elementum curabitur consequat.<br> 
augue class fames aenean nec praesent auctor nostra nulla rhoncus, vivamus arcu nam eget proin tempor neque quisque, pellentesque justo ornare sollicitudin iaculis quisque malesuada diam.<br>
nisi vitae vel commodo curae vehicula integer nam vitae sed, semper magna sem platea habitant curabitur neque augue, a consectetur fringilla tempor mauris curabitur aliquam semper. <br>
ultrices non platea porta commodo orci mauris odio at cubilia, dolor ante curabitur mi luctus quisque ut duis quam accumsan, commodo pharetra justo vestibulum aenean suspendisse integer quisque. `;

	document.querySelector('.area').classList.toggle('sombra');
	document.querySelector('.area').appendChild(termosPage);
	document.querySelector('.tela-termos').appendChild(header);
	document.querySelector('.tela-termos > .itens').appendChild(texto);
	document.querySelector('.tela-termos > .itens').appendChild(iconX);

	document.querySelector('.tela-termos').appendChild(termosCaixa);
	document.querySelector('.termos-caixa').appendChild(termosTexto);

	let fechar = document.querySelector(".itens > i");
	fechar.addEventListener("click", ()=>{
		console.log("Botão fechar precionado");
		document.querySelector('.area').classList.remove('sombra');
		document.querySelector(".tela-termos").remove();
	});
});


let caixaTermoInput = document.querySelector('#termos');
caixaTermoInput.value = false;
let sVerificado = document.querySelector("#verificado");
sVerificado.style.opacity = '0';

let enviarDados = document.querySelector('#env-dados');

let caixaTermo = document.querySelector("#caixa-termos").addEventListener("click", function(){
	caixaTermoInput.click();
	caixaTermoInput.value = true;

	if (sVerificado.style.opacity == '0') {
		sVerificado.style.opacity = "1";
	}else{
		sVerificado.style.opacity = '0';
	}
		if (caixaTermoInput.checked) {
		//console.log('A caixa foi marcada');
		caixaTermoInput.value = true;
	}else{
		//console.log("A caixa foi desmarcada");
		caixaTermoInput.value = false;
	}

	marcaBt();

	enviarDados.onclick = () =>{
		console.log("Botão cadastrar enviado");
	}

	if (caixaTermoInput == false) {
		enviarDados.forEach(function(elm){
			elm.setAttribute('disabled', 'true');
		});
	}
});

function marcaBt(){
	if (caixaTermoInput.checked == true) {
		//console.log('Caixa marcada');
	} else if (caixaTermoInput.checked == false) {
		//console.log('Caixa desmarcada');
	}
}