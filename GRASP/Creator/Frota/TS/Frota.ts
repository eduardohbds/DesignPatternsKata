import Veiculo from "./Veiculo"

class Frota {
  private veiculos: Veiculo[] = [];

  constructor() { }

  public get numeroRodas(): number {
    let rodas = 0;
    for (const v of this.veiculos) {
      if (v.getTipo() === "carro") {
        rodas += 4;
      } else if (v.getTipo() === "moto") {
        rodas += 2;
      } else if (v.getTipo() === "caminhão") {
        rodas += 8;
      }
    }
    return rodas;
  }

  public adicionarVeiculo(v: Veiculo) {
    this.veiculos.push(v);
  }
}

export default Frota;