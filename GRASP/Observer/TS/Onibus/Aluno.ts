import EstadoOnibus from "./EstadoOnibus";
import Observador from "./Observador";

export default class Aluno implements Observador {
  estadoAtualizado(estadoOnibus: EstadoOnibus) {
    if (estadoOnibus === (EstadoOnibus.CHEGUEI_UFC)) {
      console.log("Só Corre!!");
    }
  }
}