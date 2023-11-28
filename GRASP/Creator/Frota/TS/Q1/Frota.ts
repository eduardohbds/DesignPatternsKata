import Caminhao from "./Caminhao";
import Carro from "./Carro";
import Moto from "./Moto";
import Veiculo from "./Veiculo"
import Funcionario from "./Funcionario"

class Frota {
  private veiculos: Veiculo[] = [];
  private gerente: Funcionario;

  constructor() { 
    this.veiculos = []
  }
  /**
   * leNumeroRodas
   */
  public leNumeroRodas():Number {
    let rodasNum = 0
    for (let index = 0; index < this.veiculos.length; index++) {
      rodasNum += this.veiculos[index].getRodas();
    }
    return rodasNum
  }
  /**
   * atribuiGerente
   */
  public atribuiGerente(funcionario:Funcionario) {
    this.gerente = funcionario
  }
  public createVeiculo(v:string): Veiculo {
      if (v === "carro") {
        return new Carro("carro")
      } else if (v === "moto") {
        return new Moto("moto")
      } 
        return new Caminhao("caminhão")
  }

  public adicionarVeiculo(v: Veiculo,funcionario:Funcionario) {
    if (!this.gerente) {
      if (funcionario === this.gerente) {
        this.veiculos.push(v)
      } else{
        console.log(`Funcionario:${funcionario} não é gerente`);
        
      }
    } else {
      console.log('Não tem gerente');
      
    }
  }
}

export default Frota;