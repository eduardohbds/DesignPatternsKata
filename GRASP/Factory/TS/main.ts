interface IFabricaPizza {
  criaPizza(nomePizza: String):IPizza;
}
interface IPizza {
  lePreco():number;
}

class FabricaPizza implements IFabricaPizza {
  criaPizza(nomePizza: String): IPizza {
    switch (nomePizza.toLowerCase()) {
      case "calabresa":
        case "calabresa" :
          return new Calabresa()
        case "mussarela" :
          return new Mussarela()
        case "portuguesa" :
          return new Portuguesa()
        case "fortaleza" :
          return new Fortaleza()
      default:
          return new Calabresa()
    }
  }
}

class Calabresa implements IPizza{

  lePreco(): number {
    return 25;
  }
}
class Mussarela implements IPizza{

  lePreco(): number {
    return 35;
  }
}
class Portuguesa implements IPizza{

  lePreco(): number {
    return 45;
  }
}
class Fortaleza implements IPizza{

  lePreco(): number {
    return 55;
  }
}