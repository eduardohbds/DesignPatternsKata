import Veiculo from "./Veiculo";

export default class Caminhao extends Veiculo {
  constructor(chassi: string) {
    super(chassi)
    this.rodas = 8
  }
}