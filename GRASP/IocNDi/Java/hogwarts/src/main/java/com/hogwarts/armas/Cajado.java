package com.hogwarts.armas;

public class Cajado implements Armas{
  int dano = 10;
  public Cajado(int dano){
    this.dano = dano;
  }
  @Override
  public int causaDano() {
    return this.dano;
  }
}
