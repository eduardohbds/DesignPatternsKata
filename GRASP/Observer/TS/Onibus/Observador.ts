import EstadoOnibus from "./EstadoOnibus";

interface Observador{
  estadoAtualizado(estadoOnibus:EstadoOnibus):any;
}
export default Observador;