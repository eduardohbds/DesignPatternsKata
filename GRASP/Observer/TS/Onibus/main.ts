import EstadoOnibus from "./EstadoOnibus";
import Onibus from "./Onibus";
import Prefeitura from "./Prefeitura";
import Aluno from "./aluno";

class Exemplo {
  static main(): void {
    const exemplo = new Exemplo();
    exemplo.inicia();
  }

  inicia(): void {
    // criar o onibus
    const onibus = new Onibus();
    const aluno1 = new Aluno();
    const aluno2 = new Aluno();
    const prefeitura = new Prefeitura();

    onibus.adicionaObservador(aluno1);
    onibus.adicionaObservador(aluno2);
    onibus.adicionaObservador(prefeitura);

    onibus.defineEstado(EstadoOnibus.SAI_PRACA);

    onibus.defineEstado(EstadoOnibus.CHEGUEI_UFC);

    onibus.defineEstado(EstadoOnibus.SAI_UFC);
    
    onibus.defineEstado(EstadoOnibus.SAI_PRACA);

    onibus.defineEstado(EstadoOnibus.CHEGUEI_UFC);

    onibus.defineEstado(EstadoOnibus.SAI_UFC);
  }
}

Exemplo.main(); // Call the main method to run the example
