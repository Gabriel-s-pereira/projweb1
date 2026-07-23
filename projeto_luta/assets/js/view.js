//**************************************************************************************************************************************************************
// SELETORES */
//MANUTENÇÃO DO LOG.
let log = document.querySelector(".log");

//* COLETANDO os botões de ataque */
//BOTÃO LUTADOR1
let botao1 = document.querySelector(".botaor");

//BOTÃO LUTADOR2
let botao2 = document.querySelector(".botaol");

// ESCOLHENDO OS PERSONAGENS
const img1 = document.querySelector(".sprit1");
const img2 = document.querySelector(".sprit2");

//*********************************
// COLETANDO O LUTADOR ESCOLHIDO */

const lutador1dom = document.querySelector("#lutador1");
const lutador2dom = document.querySelector("#lutador2");

//*********************************
// COLETANDO O LUTADOR 1 ESCOLHIDO 
const nome1 = lutador1dom.children[1];
const life1 = lutador1dom.children[0].children[0];

// COLETANDO O LUTADOR 2 ESCOLHIDO */
const nome2 = lutador2dom.children[1];
const life2 = lutador2dom.children[0].children[0];

//***********************************************************************************************************************************************************************
// SETANDO OS VALORES NO DOM */

//* SETANDO O LUTADOR 1 ESCOLHIDO*/
function selecaolutador1(objetolutador){
nome1.innerText = objetolutador.name;
life1.style.width = `${objetolutador.life}%`;
life1.innerText = objetolutador.life;
}
//* ********************************
//SETANDO O LUTADOR 2 ESCOLHIDO */
function selecaolutador2(objetolutador){
nome2.innerText = objetolutador.name;
life2.style.width = `${objetolutador.life}%`;
life2.innerText = objetolutador.life;
}

// ADICIONANDO-OS A BATALHA
img1.innerHTML='<img src="assets/jpeg/girafalles.png" alt="professor girafales">';
img2.innerHTML='<img src="assets/jpeg/madruga.png" alt="professor girafales">';