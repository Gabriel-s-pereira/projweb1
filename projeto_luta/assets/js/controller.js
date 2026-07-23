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
        lutador1obj.atacar(lutador2obj);});

//BOTÃO LUTADOR 2
botao2.addEventListener("click", () => {
        lutador2obj.atacar(lutador1obj);});
