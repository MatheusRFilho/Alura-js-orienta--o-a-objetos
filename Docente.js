import User from './User.js';

export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovarEstudante(nome) {
    return `Estudante ${nome} Aprovado`;
  }
}

const NovoDocente = new Docente('Diego', 'XVwRy@example.com', '2024-01-01');

console.log(NovoDocente);
console.log(NovoDocente.aprovarEstudante('João'));