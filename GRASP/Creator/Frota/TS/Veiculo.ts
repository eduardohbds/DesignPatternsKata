export default class Veiculo {
  tipo: string;
  chassi: string;

  constructor(chassi: string, tipo: string) {
    this.chassi = chassi;
    this.tipo = tipo;
  }

  getTipo(): string {
    return this.tipo;
  }
}

