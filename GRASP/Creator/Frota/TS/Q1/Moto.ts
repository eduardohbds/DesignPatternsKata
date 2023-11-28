import Veiculo from "./Veiculo";

export default class Moto extends Veiculo {
  constructor(chassi: string) {
    super(chassi)
    this.rodas = 2
  }
}