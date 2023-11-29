import Observador from "./Observador";

export default class Dragon implements Observador {
  private estado:boolean = true
  atualiza(qtdOvo: number) {
    if (qtdOvo>=100 && this.estado) {
      this.acorda()
    }
  }
  acorda(){
    this.estado = false
    console.log("Raposo agora vai virar comida");
  }

}