class Char{
    _life = 0;
    constructor(nome, hp, sorte){
        if (typeof(hp) !== "number" || typeof(sorte) !== "number"){ 
            throw new Error("HP E SORTE DEVEM SER NUMEROS.");
            }
        else{
            this.name = nome;
            this._life = hp;
            this.lucky = sorte;
        }
    }
    get life(){
        if (this._life < 0){
            return this._life = 0;
        }else
            {return this._life};
        };

    set life(newlife){
        this._life = newlife;
        };

    sorteio(){
        return ((Math.random() * 10) + this.lucky);
        };

    atacar(alvo){
        let msg;
        if(defesa(alvo.lucky)){
            msg = `🛡️ ${alvo.name} defendeu o ataque! 🛡️ `;
        }else{
            let dano = Math.floor(this.sorteio())
            alvo.life -= dano;
            msg =`⚔️ o ${this.name} causou ${dano} de dano em ${alvo.name} ⚔️`;
            atualizalife();
        };
        logadd(log, msg);
        finalround();
        };

}

/************************************************************************************************************************************************************
 * FUNÇÕES */
/**ATUALIZA O LOG */
function logadd(log, msg){
        let tag = document.createElement("li");
        tag.innerText = msg; 
        log.prepend(tag);
    };

/** ATUALIZA O HP NO DOM */
function atualizalife(){
    life1.style.width = `${lutador1obj.life}%`;
    life1.innerText = lutador1obj.life;

    life2.style.width = `${lutador2obj.life}%`;
    life2.innerText = lutador2obj.life;
    
//ALTERA A COR DA BARRA DE VIDA QUANDO O PERSONAGEM TIVER 99 OU MENOS DE VIDA.
    if(lutador1obj.life < 100){
        life1.style.backgroundColor = "red";
    };
    if(lutador2obj.life < 100){
        life2.style.backgroundColor = "red";
    }
}


function finalround(){
    if(lutador1obj.life <= 0 || lutador2obj.life <= 0 ){
        if (lutador1obj.life > 0){
            alert(`o ${lutador1obj.name} veuceu a batalha!!`);
        }else{
            alert(`o ${lutador2obj.name} venceu a batalha!!`);
        }
        log.innerHTML = "<h1> REINICIE O GAME </h1>";
}
};

/***************************************
CALCULO DE SORTE PARA DEFESA OU NÃO. 
*/
function defesa(sorte){

    let resultado = Math.random();

    for(let i = 1; i < sorte; i++){
        resultado = Math.max(resultado, Math.random());
    }

    return resultado >= 0.75;
};