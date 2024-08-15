import User from './User.js';

export default class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nome, vagas) {
    return `Curso ${nome} criado com ${vagas} vagas`;
  }

  exibirInfos() {
    const infos = super.exibirInfos();
    return `admin - ${infos}`;
  }
}

const NovoAdmin = new Admin('Diego', 'XVwRy@example.com', '2024-01-01');

console.log(NovoAdmin);
console.log(NovoAdmin.criarCurso('JavaScript', 20));