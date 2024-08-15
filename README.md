
# Curso: JavaScript - Programação Orientada a Objetos

Este repositório contém os códigos desenvolvidos durante o curso **JavaScript: Programação Orientada a Objetos**, realizado na plataforma Alura. O objetivo do curso foi dominar os conceitos de Orientação a Objetos aplicados ao JavaScript.

## Plataforma

- **Alura**

## Tópicos Abordados

Neste curso de Node.JS, foram explorados os seguintes conceitos:

- Aprendizado dos principais conceitos de orientação a objetos (OO).
- Compreensão de como o JavaScript lida com OO através de funções e protótipos.
- Estudo dos princípios de classe, objeto e herança.
- Entendimento do encapsulamento e sua importância.
- Exploração do polimorfismo em JavaScript.

## Estrutura do Código

O código está organizado em classes que simulam um sistema de gerenciamento de usuários com diferentes papéis:

### Classes Implementadas

- **User:** Classe base que define atributos comuns como nome, email, data de nascimento, role e status ativo.
- **Admin:** Extensão da classe `User`, com funcionalidades administrativas, como criação de cursos.
- **Docente:** Extensão da classe `User`, com a habilidade de aprovar estudantes.

### Exemplos de Uso

#### Criação de Usuários

```javascript
const novoAdmin = new Admin('Matheus', 'matheus@example.com', '2024-01-01');
console.log(novoAdmin.exibirInfos());
```

#### Criação de Curso pelo Admin

```javascript
console.log(novoAdmin.criarCurso('JavaScript', 20));
```

#### Aprovação de Estudante pelo Docente

```javascript
const novoDocente = new Docente('Diego', 'diego@example.com', '2024-01-01');
console.log(novoDocente.aprovarEstudante('João'));
```

## Tecnologias Utilizadas

- **JavaScript (ES6)**
- **Node.js** (para execução dos scripts)

## Como Executar o Código

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusRFilho/Alura-js-orienta--o-a-objetos
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Execute o código:

   ```bash
   node nome-do-arquivo.js
   ```

## Autor

- **Matheus Filho** - [LinkedIn](https://www.linkedin.com/in/matheus-filho-90015917a/) - [GitHub](https://github.com/MatheusRFilho)
