
	var palavras = ["PAPAGAIO", "GIRAFA", "CORUJA", "CARNEIRO", "OVELHA", "FORMIGA", "ELEFANTE", "ORNITORRINCO", "GAIVOTA", "ABELHA","CACHORRO", "COELHO", "MORCEGO"]; 
	var palavraSorteada;
	var listaDinamica = [];
	var erros = 6;
	var letrasDaPalavra;
	var adicionarPalavra = document.querySelector("#nova-palavra");
	var letraErrada= [];
	
	
desenhaTabuleiro();

sortearPalavra();

adicionarPalavra.addEventListener("click", function(){
	event.preventDefault();
	var palavraAdicionada = document.querySelector("#input-nova-palavra");
	var palavraNova = palavraAdicionada.value;
	palavras.push(palavraNova);
	if(palavraNova == 0){
		alert("Por favor, adicione uma palavra válida!")
	} else {
		alert("A palavra " + palavraNova +" foi adicionada com sucesso!");
	palavraAdicionada.classList.add("invisivel");
	adicionarPalavra.classList.add("invisivel");
	}
	

});
function sortearPalavra() {
	var minhaPalavra = parseInt(Math.random() * palavras.length);
	palavraSorteada = palavras[minhaPalavra];
	letrasDaPalavra = palavraSorteada.split('');
	
}
mostrarPalavra();

function mostrarPalavra() {
	
	const palavraTela = document.getElementById("palavra-secreta");
	palavraTela.innerHTML = "";

		for(i = 0; i < letrasDaPalavra.length; i++) {
			if(listaDinamica[i] == undefined){
				listaDinamica[i] = "&nbsp";
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='layout-letras'>" + listaDinamica[i] + "</div>"
		}
		else{
			palavraTela.innerHTML = palavraTela.innerHTML + "<div class='layout-letras'>" + listaDinamica[i] + "</div>"
		}
	}
}

function letraEscolhida(letra){
	document.getElementById("tecla-" + letra).disabled= true;
		
		if(erros > 0) {
		mudarStyleLetra("tecla-" + letra);
		comparaLetra(letra);
		mostrarPalavra();
	}
}

function mudarStyleLetra(tecla){
	document.getElementById(tecla).style.background = "black";
	document.getElementById(tecla).style.color = "black";
}

function comparaLetra(letra){
	var letraErrada = document.querySelector(".letras-incorretas");
	var posicaoLetra = letrasDaPalavra.indexOf(letra)
	
		if(posicaoLetra < 0){
			erros--
				letraErrada.innerHTML = letraErrada.innerHTML + "<div class='letras-incorretas'>" + letra + "</div>"; 
		
		desenhaForca();

		if(erros == 0) {
			vocePerdeu();
		}
		
	}
	else{

		for(i = 0; i < letrasDaPalavra.length; i++){

			if(letrasDaPalavra[i] == letra){
				listaDinamica[i] = letra;
			}
			
		}
	}
	var vitoria = true;
		for(i = 0; i < letrasDaPalavra.length; i++){

			if(letrasDaPalavra[i] != listaDinamica[i]){
			vitoria= false
		}
	}

	if(vitoria == true){
		erros = 0;
		voceGanhou();
	}
}
function desenhaForca()	{
	switch(erros){
		case 5:
			desenhaCabeça();
			break;
		case 4:
			desenhaCorpo();
			break;
		case 3:
			desenhaBraçoDireito();
			break;
		case 2:
			desenhaBraçoEsquerdo();
			break;
		case 1:
			desenhaPernaDireita();
			break;
		case 0: 
			desenhaPernaEsquerda();
			break;
		default:
			desenhaTabuleiro();

	}
}
function voceGanhou() {
	var titulo = document.querySelector("h2");
	var texto = document.createTextNode("Parabéns, você venceu!");
	titulo.appendChild(texto);
	titulo.style.color = "green";
}
function vocePerdeu() {
	var titulo = document.querySelector("h2");
	var texto = document.createTextNode("Você perdeu! A palavra era " + palavraSorteada);
	titulo.appendChild(texto);
	titulo.style.color = "red";

}

var JogarNovamente = document.querySelector("#btnReiniciar")
JogarNovamente.addEventListener("click", function(){
	location.reload();
})

