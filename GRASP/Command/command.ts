

class Portao {
  // Receiver
  public static readonly ABERTO = 0;
  public static readonly PECHADO = 1;

  private estado: number = 0;

  public getEstado(): number {
    return this.estado;
  }

  public setEstado(estado: number): void {
    this.estado = estado;
  }

  public abrir(): void {
    this.estado = Portao.ABERTO;
    console.log("O portão abriu.");
  }

  public fechar(): void {
    this.estado = Portao.PECHADO;
    console.log("O portão fechou.");
  }
}

interface Command{
  execute(): void;
  undo(): void;
}

class AbrirCommand implements Command {
  portao: Portao;

  constructor(portao: Portao) {
    this.portao = portao;
  }
  execute(): void {
    this.portao.abrir()
  }
  undo(): void {
    this.portao.fechar()
  }
}

class Controle {
  private commands: Command[];
  private ultimoCommand: Command;

  constructor(abrirCommand: Command, fecharCommand: Command) {
    this.commands = new Command[2];
    this.commands[0] = abrirCommand;
    this.commands[1] = fecharCommand;
  }

  public abrirPortao(): void {
    this.commands[0].execute();
    this.ultimoCommand = this.commands[0];
  }

  public fecharPortao(): void {
    this.commands[1].execute();
    this.ultimoCommand = this.commands[1];
  }

  public desfazer(): void {
    this.ultimoCommand.undo();
  }
}
