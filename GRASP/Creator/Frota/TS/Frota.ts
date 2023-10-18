import Caminhao from "./Caminhao";
import Carro from "./Carro";
import Moto from "./Moto";
import Veiculo from "./Veiculo"

class Frota {
  private veiculos: Veiculo[] = [];

  constructor() { }

  public createVeiculo(v:string): Veiculo {
      if (v === "carro") {
        return new Carro("carro")
      } else if (v === "moto") {
        return new Moto("moto")
      } 
        return new Caminhao("caminhão")
  }

  public adicionarVeiculo(v: Veiculo) {
    this.veiculos.push(v);
  }
}

export default Frota;