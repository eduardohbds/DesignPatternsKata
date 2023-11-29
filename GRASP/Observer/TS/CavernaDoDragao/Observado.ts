import Observador from "./Observador";
// O observador é coletor de ovos 

export default interface Observado{
  adicionaObservador(observador:Observador):any
  removeObservador(observador:Observador):any
  notifica():any
}