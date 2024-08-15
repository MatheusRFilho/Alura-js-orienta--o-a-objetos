export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || 'estudante';
    this.ativo = ativo;
  }

  criarPerfil() {
    return 'Perfil criado!';
  }
 
  apagarPerfil() {
    return 'Perfil Apagado!';
  }
 
  exibirInfos() {
    return (`${this.nome}, ${this.email}`);
  }
}

const newUser = new User('Diego', 'XVwRy@example.com', '2024-01-01');

// console.log(newUser);
// console.log(newUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(newUser));