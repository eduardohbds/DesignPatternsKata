import java.util.ArrayList;

public class Frota {
	private ArrayList<Veiculo> veiculos;
	
	public Frota() {
		veiculos = new ArrayList<Veiculo>();
	}
	
	public int leNumeroRodas() {
		int rodas = 0;
		for (Veiculo v: veiculos) {
			if (v.leTipo().equals("carro")){
				rodas += 4;
			} else if (v.leTipo().equals("moto")){
				rodas += 2;
			} else if (v.leTipo().equals("caminhão")){
				rodas += 8;
			}
		}
		return rodas;
	}
	
	public void adicionaVeiculo(Veiculo v){
		this.veiculos.add(v);
	}
}
