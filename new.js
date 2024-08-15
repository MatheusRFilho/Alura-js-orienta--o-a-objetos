// class User {
//   constructor(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibitInfos = function () {
//       return (`${this.nome}, ${this.email}`);
//     };
//   }
// }

function User(nome, email) {
  this.nome= nome;
  this.email = email;

  this.exibitInfos =  function() {
    return (`${this.nome}, ${this.email}`);
  }
}

const novoUser = new User('Diego', 'XVwRy@example.com');
console.log(novoUser.exibitInfos());
