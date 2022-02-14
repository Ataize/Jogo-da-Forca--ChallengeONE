function desenhaTabuleiro() {
	//defineInputLetras();
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')

	pincel.fillStyle = "lightblue";
	pincel.fillRect(30, 0, 800, 400);

	pincel.fillStyle = "#F4A460";
	pincel.fillRect(350, 40, 30, 400);
	pincel.fillRect(380, 60, 200, 30);
	pincel.fillRect(330, 440, 250, 10);

	pincel.fillStyle = "#CD853F";
	pincel.fillRect(540, 90, 5, 40);
}

function desenhaCabeça() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.arc(542, 150, 20, 0, 2 * 3.14);
	pincel.fill();
}	
	
function desenhaCorpo() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.fillRect(538, 168, 10, 80);
}
	
function desenhaBraçoDireito() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(540, 180);
	pincel.lineTo(500, 210);
	pincel.lineWidth = 5;
	pincel.stroke();
}
	
function desenhaBraçoEsquerdo() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(546, 180);
	pincel.lineTo(586, 210);
	pincel.stroke();
}
	
function desenhaPernaDireita() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(540, 242);
	pincel.lineTo(500, 290);
	pincel.stroke();
}
	
function desenhaPernaEsquerda() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(546, 242);
	pincel.lineTo(580, 290);
	pincel.stroke();
}
	
	//botaoIniciar.onclick = desenhaTabuleiro;

