export default class Funcionario {
  cargo: string;
  nome: string;

  constructor(nome: string, cargo: string) {
    this.nome = nome;
    this.cargo = cargo;
  }
}
