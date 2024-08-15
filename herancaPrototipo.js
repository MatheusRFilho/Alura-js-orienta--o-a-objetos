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


const admin = {
  nome: 'Teste',
  email: 'te@example.com',
  role: 'admin',
  nascimento: '2024-01-01',
  ativo: true,
  criarCurso: function() {
    console.log(`Curso criado`);
  }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();