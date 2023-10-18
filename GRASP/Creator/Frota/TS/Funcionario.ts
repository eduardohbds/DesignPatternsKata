import Veiculo from "./Veiculo";
import Frota  from "./Frota";

export class Funcionario {
  cargo: string;
  nome: string;

  constructor(nome: string, cargo: string) {
    this.nome = nome;
    this.cargo = cargo;
  }

  adicionaVeiculoNaFrota(chassi: string, tipo: string, frota: Frota) {
    if (this.cargo === "Gerente") {
      frota.adicionarVeiculo(new Veiculo(chassi, tipo));
    }
  }
}
