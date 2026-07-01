class Char{
    constructor(nome, hp, sorte){
        if (typeof(hp) == "number" && typeof(sorte) == "number"){ 
            this.name = nome;
            this.life = hp;
            this.lucky = sorte;
            }
    }
}

const chaves = new Char("chaves",100,1);
const girafales = new Char("PROFESSOR GIRAFALES",110,2);
const madruga = new Char("SEU MADRUGA",120,1);
const quico = new Char("Quico",100,3);
const chiquinha = new Char("Chiquinha",100,3);



//**para a primeira versão teremos somente os personagens
//  prof.girafalles e seu madruga.  */

// ESCOLHENDO OS PERSONAGENS
const img1 = document.querySelector(".sprit1");
const img2 = document.querySelector(".sprit2");

// ADICIONANDO-OS A BATALHA
img1.innerHTML='<img src="assets/jpeg/girafalles.png" alt="professor girafales">';
img2.innerHTML='<img src="assets/jpeg/madruga.png" alt="professor girafales">';

//*********************************
// COLETANDO O LUTADOR ESCOLHIDO */

const lutador1 = document.querySelector("#lutador1");
const lutador2 = document.querySelector("#lutador2");

//*********************************
// SETANDO O LUTADOR 1 ESCOLHIDO */
lutador1.children[1].innerText = girafales.name;
lutador1.children[0].children[0].style.width = `${girafales.life}%`;
lutador1.children[0].children[0].innerText = girafales.life;

//*********************************
// SETANDO O LUTADOR 2 ESCOLHIDO */
lutador2.children[1].innerText = madruga.name;
lutador2.children[0].children[0].style.width = `${madruga.life}%`;

