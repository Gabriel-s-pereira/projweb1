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
const girafales = new Char("Girafalles Vigarista",110,2);
const madruga = new Char("Super Madrugadão",120,1);
const quico = new Char("Quico",100,3);
const chiquinha = new Char("Chiquinha",100,3);

const lutador1 = document.querySelector(".sprit1");
const lutador2 = document.querySelector(".sprit2");


lutador1.innerHTML='<img src="assets/jpeg/girafalles.png" alt="professor girafales">';
lutador2.innerHTML='<img src="assets/jpeg/madruga.png" alt="professor girafales">';