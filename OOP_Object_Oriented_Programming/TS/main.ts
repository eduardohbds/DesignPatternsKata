class Funcionario {
  name:string;
  wage:number;
  position:string;
  constructor(name: string,wage: number,position = "") {
    this.name = name
    this.wage = wage
    this.position = position
  }
  toString(): string{
    return (
    `Name:${this.name}
Wage:${this.wage}
${this.position? `Position:${this.position}`:''}`)
  }
}

class Lider extends Funcionario {
  setor: string;
  constructor(name: string, wage: number, setor: string,position:string) {
    super(name, wage,position);
    this.setor = setor
  }
  toStringLider(): string {
    return `${this.toString()} Setor:${this.setor}`
  }
}

class Operador extends Funcionario{
  constructor(name: string, wage: number) {
    super(name,wage)
  }
}

let salgado = new Funcionario('Salgado',1300);
console.log(salgado.toString());
salgado = new Lider('Salgado', 2800,'frente de loja','lider');
console.log(salgado.toString());

