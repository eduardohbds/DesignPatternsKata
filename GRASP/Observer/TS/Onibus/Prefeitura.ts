import EstadoOnibus from "./EstadoOnibus";
import Observador from "./Observador";

export default class Prefeitura implements Observador {
  trechos:number = 0;
  estadoAtualizado(estadoOnibus: EstadoOnibus) {
    if (estadoOnibus === (EstadoOnibus.SAI_PRACA) || estadoOnibus === (EstadoOnibus.SAI_UFC)) {
      this.trechos++
      console.log(`Fiz essa qtd de ${this.trechos} trechos`);
      
    }
  }
}