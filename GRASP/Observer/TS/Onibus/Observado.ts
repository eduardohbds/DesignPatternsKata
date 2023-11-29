import Observador from "./Observador"

export default interface Observado{
  adicionaObservador(observador: Observador): any
  removeObservador(observador: Observador): any
  notifica(): any
}