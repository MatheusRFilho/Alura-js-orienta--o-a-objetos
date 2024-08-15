function User(nome, email) {
  this.nome = nome
  this.email = email
 
  this.exibirInfos = function() {
    return `${this.nome}, ${this.email}`
  }
 }

 function Admin(role) {
  User.call(this, 'Juliana', 'j@j.com')
  this.role = role || 'estudante'
 }

 Admin.prototype = Object.create(User.prototype)


 const user = {
  init: function(nome, email) {
    this.nome = nome
    this.email = email
  },
  exibirInfos: function() {
    return `${this.nome}, ${this.email}`
  }
 }

 const juliana = Object.create(user)
juliana.init('Juliana', 'j@j.com')
console.log(juliana.exibirInfos())

 const juliana2 = Object.create(user)
console.log(juliana2.exibirInfos({nome: 'Juliana', email: 'j@j.com'}))
console.log(user.isPrototypeOf(juliana2)) //true
console.log(juliana2.nome, juliana2.email) //undefined

juliana.nome = 'Juliana'
juliana.email = 'j@j.com'
console.log(juliana2.nome, juliana2.email)

