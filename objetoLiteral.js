const user = {
  nome: 'Diego',
  email: 'XVwRy@example.com',
  role: 'estudante',
  nascimento: '2024-01-01',
  ativo: true,
  exibirInfos: function() {
    console.log(`${this.nome}, ${this.email}, ${this.role}, ${this.nascimento}, ${this.ativo}`);
  }
}


// const exibir = user.exibirInfos;
// exibir();

const exibir = function() {
  console.log(`${this.nome}, ${this.email}, ${this.role}, ${this.nascimento}, ${this.ativo}`);
}

const exibirNome = exibir.bind(user);
exibirNome();