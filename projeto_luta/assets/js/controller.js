//FUNÇÕES:
//TESTA SE A PARTIDA TERMINOU:
function finalround(lutador,alvo){
    if(alvo.life <= 0){ //|| lutador2obj.life <= 0 ){
        mostrarVencedor(lutador.name);
}};

//BOTÃO DE ATAQUE
function realizaAtaque(lutador,alvo){
        const resultado = lutador.atacar(alvo);
        if(resultado.sucesso === true){
                atualizalife();
                adicionalog(log, resultado.mensagem);
                finalround(lutador,alvo);
        }else{
              adicionalog(log, resultado.mensagem);  
        }};

//TESTA A TECLA PRESSIONADA PARA EXECUÇÃO DO ATAQUE.
function teclacerta(tecla){
        if(tecla.code === "ArrowLeft"){
                realizaAtaque(lutador1obj,lutador2obj);

        }else if(tecla.code === "ArrowRight"){
                realizaAtaque(lutador2obj,lutador1obj);
        }
};
//SETANDO PERSONAGENS PARA VERSÃO POSTERIOR.
const chaves = new Char("chaves",120,2);
const girafales = new Char("PROFESSOR GIRAFALES",110,2);
const madruga = new Char("SEU MADRUGA",130,1);
const quico = new Char("Quico",100,3);
const chiquinha = new Char("Chiquinha",90,4);

//**para a primeira versão teremos somente os personagens
//  prof.girafalles e seu madruga.  */
const lutador1obj = girafales;
const lutador2obj = madruga;

//SETANDO OS LUTADORES
selecaolutador1(lutador1obj);
selecaolutador2(lutador2obj);

//CRIANDO ADICIONANDO EVENTO NOS BOTÕES DE BATALHA
//BOTÃO LUTADOR 1
botao1.addEventListener("click", () => {
        realizaAtaque(lutador1obj,lutador2obj);});

/**BOTÃO TECLADO:
 * LUTADOR1 = SETA ESQUERDA(<-).
 * LUTADOR2 = SETA DIREITA (->).*/
document.addEventListener("keyup",function(event){
        teclacerta(event);
});

//BOTÃO LUTADOR 2
botao2.addEventListener("click", () => {
        realizaAtaque(lutador2obj,lutador1obj);});
