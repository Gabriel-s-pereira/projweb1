class Char{
    constructor(nome, hp, sorte){
        if (typeof(hp) !== "number" || typeof(sorte) !== "number"){ 
            throw new Error("HP E SORTE DEVEM SER NUMEROS.");
            }
        else{
            this.name = nome;
            this.life = hp;
            this.lucky = sorte;
        }
    }
    sorteio(){
        return ((Math.random() * 10) + this.lucky);
    }
    logadd(log, msg){
        let tag = document.createElement("li");
        tag.innerText = msg; 
        log.prepend(tag);
    }
    atacar(alvo){
        let dano = Math.floor(this.sorteio())
        alvo.life -= dano;
        let msg =`o ${this.name} causou ${dano} de dano em ${alvo.name}`;
        atualizalife();
        this.logadd(log, msg);
        finalround();
        return;
    }

}

function atualizalife(){
    lutador1dom.children[1].innerText = girafales.name; 
    lutador1dom.children[0].children[0].style.width = `${girafales.life}%`;
    lutador1dom.children[0].children[0].innerText = girafales.life;

    lutador2dom.children[1].innerText = madruga.name;
    lutador2dom.children[0].children[0].style.width = `${madruga.life}%`;
    lutador2dom.children[0].children[0].innerText = madruga.life;
}
function finalround(){
    if(lutador1obj.life < 0 || lutador2obj.life < 0 ){
        if (lutador1obj.life > 0){
            alert(`o ${lutador1obj.name} veuceu a batalha!!`);
        }else{
            alert(`o ${lutador2obj.name} venceu a batalha!!`);
        }
        log.innerHTML = "<h1> REINICIE O GAME </h1>";
}
}

//PERSONAGENS PARA VERSÃO POSTERIOR.
const chaves = new Char("chaves",120,2);
const girafales = new Char("PROFESSOR GIRAFALES",110,2);
const madruga = new Char("SEU MADRUGA",130,1);
const quico = new Char("Quico",100,3);
const chiquinha = new Char("Chiquinha",90,4);

//**para a primeira versão teremos somente os personagens
//  prof.girafalles e seu madruga.  */
const lutador1obj = girafales;
const lutador2obj = madruga;

//* criando os botões de ataque */
let botao1 = document.querySelector(".botaor");
    botao1.addEventListener("click", () => {
        lutador1obj.atacar(lutador2obj);});

let botao2 = document.querySelector(".botaol");
    botao2.addEventListener("click", () => {
        lutador2obj.atacar(lutador1obj);});

// ESCOLHENDO OS PERSONAGENS
const img1 = document.querySelector(".sprit1");
const img2 = document.querySelector(".sprit2");

// ADICIONANDO-OS A BATALHA
img1.innerHTML='<img src="assets/jpeg/girafalles.png" alt="professor girafales">';
img2.innerHTML='<img src="assets/jpeg/madruga.png" alt="professor girafales">';

//*********************************
// COLETANDO O LUTADOR ESCOLHIDO */

const lutador1dom = document.querySelector("#lutador1");
const lutador2dom = document.querySelector("#lutador2");



//*********************************
// SETANDO O LUTADOR 1 ESCOLHIDO 
lutador1dom.children[1].innerText = girafales.name;
lutador1dom.children[0].children[0].style.width = `${girafales.life}%`;
lutador1dom.children[0].children[0].innerText = girafales.life;
//console.log(girafales.atacar(madruga));

//*********************************
// SETANDO O LUTADOR 2 ESCOLHIDO */
lutador2dom.children[1].innerText = madruga.name;
lutador2dom.children[0].children[0].style.width = `${madruga.life}%`;
lutador2dom.children[0].children[0].innerText = madruga.life;
//console.log(madruga.atacar(girafales)); //obs: o ataque deve ficar a cima da setação de hp


//MANUTENÇÃO DO LOG.
let log = document.querySelector(".log");