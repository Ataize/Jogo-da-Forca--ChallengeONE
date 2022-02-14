
	var palavras = ["PAPAGAIO", "GIRAFA", "CORUJA", "CARNEIRO", "OVELHA", "FORMIGA", "ELEFANTE", "ORNITORRINCO", "GAIVOTA", "ABELHA"]; 
	var palavraSorteada;
	var listaDinamica = [];
	var erros = 6;
	var letrasDaPalavra;

desenhaTabuleiro();

sortearPalavra();
//Para adicionar uma nova palavra:
var adicionarPalavra = document.querySelector("#nova-palavra");
adicionarPalavra.addEventListener("click", function(){
	event.preventDefault();
	var palavraAdicionada = document.querySelector("#input-nova-palavra");
	var palavraNova = palavraAdicionada.value;
	palavras.push(palavraNova);
	alert("A palavra " + palavraNova +" foi adicionada com sucesso!");
	palavraAdicionada.classList.add("invisivel");
	adicionarPalavra.classList.add("invisivel");

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

	var posicaoLetra = letrasDaPalavra.indexOf(letra)
	
		if(posicaoLetra < 0){
			erros--
		//aparecer a letra errada
		desenhaForca();

		if(erros == 0) {
			alert("OPS! Não foi dessa vez... A Palavra Secreta era " + palavraSorteada);
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
		alert("Parabéns!Você ganhou!");
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
var JogarNovamente = document.querySelector("#btnReiniciar")
JogarNovamente.addEventListener("click", function(){
	location.reload();
})



/*

ar botaoIniciar = document.querySelector("#iniciar-jogo");
//var novaPalavra = document.querySelector("#input-nova-palavra").value;

botaoIniciar.addEventListener("click", function(){
	desenhaTabuleiro();
	sortearPalvra();
	mostrarPalavra();
	
});	

	*/