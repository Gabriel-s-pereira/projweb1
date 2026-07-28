class Char{
    _life = 0;
    constructor(nome, hp, sorte){
        if (typeof(hp) !== "number" || typeof(sorte) !== "number"){ 
            throw new Error("HP E SORTE DEVEM SER NUMEROS.");
            }
        this.name = nome;
        this._life = hp;
        this.lucky = sorte;
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

    defender(sorte){
    let resultado = Math.random();

    for(let i = 1; i < sorte; i++){
        resultado = Math.max(resultado, Math.random());
    }
    return resultado >= 0.75;
};

    atacar(alvo){
    if(this.defender(alvo.lucky)){

        return {
            sucesso:false,
            mensagem:`🛡️ ${alvo.name} defendeu o ataque! 🛡️`
        };

    }

    const dano = Math.floor(this.sorteio());

    alvo.life -= dano;

    return{
        sucesso:true,
        dano:dano,
        mensagem:`⚔️ ${this.name} causou ${dano} de dano em ${alvo.name} ⚔️`
    };

}
}