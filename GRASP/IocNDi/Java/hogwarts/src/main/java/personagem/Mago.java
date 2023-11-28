package personagem;
import com.hogwarts.armas.Cajado;

import com.hogwarts.armas.Armas;
public class Mago
{
  private Armas armas;
  Mago(){
    armas = new Cajado(10);
  }
  public int Atacar(){
    return armas.causaDano();
  }
  public void mudarArma(Armas armaNova) {
    this.armas = armaNova;
  }
}