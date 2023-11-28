export default abstract class Veiculo {
  chassi: string;
  rodas = 0;

  constructor(chassi: string) {
    this.chassi = chassi;
  }

  getRodas(): number {
    return this.rodas;
  }

  toString(): string {
    return `Chassi:${this.chassi} Rodas:${this.rodas}`
  }
}

