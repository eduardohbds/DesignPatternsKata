import Observado from "./Observado";
import Observador from "./Observador";

export default class Guerreiro implements Observado{
  private observadores:Observador[] = [];
  private qtdOvos:number = 0 

  adicionaObservador(observador: Observador) {
    this.observadores.push(observador)
  }
  removeObservador(observador: Observador) {
    this.observadores = this.observadores.filter((obs)=>{obs !== observador})
  }
  notifica() {
    for (const observadora of this.observadores) {
      observadora.atualiza(this.qtdOvos)
    }
  }  
  /**
   * collectEggs
   */
  public collectEggs() {
    this.qtdOvos += 10
    if (this.qtdOvos>=100) {
      this.notifica()
    }
  }
}