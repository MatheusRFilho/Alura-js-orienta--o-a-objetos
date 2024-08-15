import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Diego', 'XVwRy@example.com', '2024-01-01');

novoUser.nome = 'João';
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Matheus', 'XVwRy@example.com', '2024-01-01');
console.log(novoAdmin.exibirInfos());

const novaDocente = new Docente('Matheus', 'XVwRy@example.com', '2024-01-01');
console.log(novaDocente.exibirInfos());

const dados = User.exibirInfosGenericas('Diego', 'XVwRy@example.com');
console.log(dados);
