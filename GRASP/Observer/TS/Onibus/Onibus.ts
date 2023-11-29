import EstadoOnibus from "./EstadoOnibus";
import Observado from "./Observado";
import Observador from "./Observador";

export default class Onibus implements Observado {
  private observadores: Observador[] = []
  private estadoOnibus:EstadoOnibus;
  
  constructor() {
    this.estadoOnibus = EstadoOnibus.CHEGUEI_PRACA
  }
  /**
   * defineEstado
   */
  public defineEstado(estadoOnibus:EstadoOnibus) {
    this.estadoOnibus = estadoOnibus
    this.notifica()
  }
  /**
   * leEstado
   */
  public leEstado():EstadoOnibus {
    return this.estadoOnibus
  }
  adicionaObservador(observador: Observador):void {
    this.observadores.push(observador)
  }
  removeObservador(observador: Observador) {
    this.observadores = this.observadores.filter((obs)=>{obs!==observador})
  }
  notifica() {
    for (const observador of this.observadores) {
      observador.estadoAtualizado(this.estadoOnibus)
    }
  }
}