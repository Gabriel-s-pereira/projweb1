# 🥊 vschaves

Um jogo de luta simples desenvolvido para exercício e prática de **JavaScript** e da arquitetura **MVC (Model-View-Controller)**.

## 🎮 Sobre o projeto

O **vschaves** é um pequeno jogo de luta em que dois personagens se enfrentam em uma arena.

Cada lutador possui características próprias, como:

* ❤️ **Vida**
* ⚔️ **Ataque**
* 🍀 **Sorte**

A sorte representa a capacidade do personagem de **defender um ataque recebido**.

Cada lutador possui um botão próprio para atacar e também pode realizar o ataque utilizando uma tecla específica do teclado.

## ⚔️ Funcionalidades

* Ataques entre dois lutadores.
* Botão individual de ataque para cada personagem.
* Ataques utilizando o teclado.
* Sistema de vida.
* Sistema de dano.
* Sistema de defesa baseado no atributo de sorte.
* Log dos acontecimentos da batalha.
* Identificação do vencedor.
* Personagens com atributos diferentes.
* Arquitetura MVC para separação das responsabilidades do projeto.

## 🧩 Arquitetura MVC

O projeto foi organizado utilizando o padrão **MVC**, separando a aplicação em três responsabilidades principais:

### Model

Responsável pelas regras e pela lógica dos personagens e da batalha.

```text
model.js
```

Contém a classe `Char`, responsável por representar os personagens, seus atributos, ataques e sistema de defesa.

### View

Responsável pela interação com a interface e pela atualização dos elementos HTML.

```text
view.js
```

Controla elementos como:

* Barras de vida;
* Nomes dos personagens;
* Log da batalha;
* Mensagem do vencedor;
* Imagens dos personagens.

### Controller

Responsável por intermediar as ações do usuário entre o Model e a View.

```text
controller.js
```

Controla:

* Eventos dos botões;
* Eventos do teclado;
* Execução dos ataques;
* Verificação do fim da batalha.

## 📁 Estrutura do projeto

```text
vschaves/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── model.js
│   │   ├── view.js
│   │   └── controller.js
│   │
│   └── jpeg/
│       ├── arena.jpg
│       ├── girafalles.png
│       └── madruga.png
│
└── README.md
```

## 🖥️ Como executar

Não é necessário instalar dependências ou utilizar um servidor.

Basta clonar o repositório:

```bash
git clone https://github.com/gabriel-s-pereira/vschaves.git
```

Depois, entre na pasta do projeto e abra o arquivo:

```text
index.html
```

em um navegador.

## 📸 Captura de tela

Uma captura de tela do jogo será adicionada posteriormente.

```text
[ ADICIONAR SCREENSHOT AQUI ]
```

## 🚀 Próximas versões

Para versões futuras, estão planejadas algumas melhorias, como:

* Animações mais dinâmicas durante os ataques;
* Adição de novos personagens jogáveis;
* Expansão das possibilidades de combate.

## 🛠️ Tecnologias

* **HTML5** — estrutura da página;
* **CSS3** — estilização e criação da arena;
* **JavaScript** — lógica do jogo, eventos e arquitetura MVC.

## 👤 Autor

Desenvolvido por **Gabriel S. Pereira**.

GitHub: `gabriel-s-pereira`

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

A licença permite o uso, cópia, modificação e distribuição do projeto, desde que os termos da licença sejam respeitados.
