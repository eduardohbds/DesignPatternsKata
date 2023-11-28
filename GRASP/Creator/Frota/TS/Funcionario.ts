export default class Funcionario {
  cargo: string;
  nome: string;

  constructor(nome: string, cargo: string) {
    this.nome = nome;
    this.cargo = cargo;
  }

  compare(funcionario1: Funcionario, funcionario2: Funcionario): boolean {
    return ((funcionario1.nome == funcionario2.nome) && (funcionario1.cargo == funcionario2.cargo));
  }
}
