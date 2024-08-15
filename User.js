export default class User {

  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || 'estudante';
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome;
  }

  set nome(value) {
    this.#nome = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }

  get nascimento() {
    return this.#nascimento;
  }

  set nascimento(value) {
    this.#nascimento = value;
  }

  get role() {
    return this.#role;
  }

  set role(value) {
    this.#role = value;
  }

  get ativo() {
    return this.#ativo;
  }

  set ativo(value) {
    this.#ativo = value;
  }

  // exibirInfos() {
  //   const objUser = this.#montaObjsUser();
  //   return (`${objUser.nome}, ${objUser.email}`);
  // };

  exibirInfos() {
    if (this.role === 'estudante') {
      return `dados estudante: ${this.nome}`;
    }
    if (this.role === 'docente') {
      return `dados docente: ${this.nome}, ${this.email}`;
    }
    if (this.role === 'admin') {
      return `dados admin: ${this.nome}, ${this.role}`;
    }
  }

  #montaObjsUser() {
    return ({nome: this.#nome, email: this.#email, nascimento: this.#nascimento, role: this.#role, ativo: this.#ativo})
  }

  static exibirInfosGenericas(nome, email) {
    return (`Nome: ${nome}, Email: ${email}`);
  }
}



// const newUser = new User('Diego', 'XVwRy@example.com', '2024-01-01');

// console.log(newUser);
// console.log(newUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(newUser));