import Veiculo from "./Veiculo";

export default class Carro extends Veiculo{
  constructor(chassi:string) {
    super(chassi)
    this.rodas = 4
  }
}
