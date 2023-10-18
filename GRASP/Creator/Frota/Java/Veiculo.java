
public class Veiculo {

	String tipo;
	String chassi;
	
	public Veiculo(String chassi, String tipo){
		this.chassi = chassi;
		this.tipo = tipo;
	}
	
	public String leTipo(){
		return this.tipo;
	}
}
