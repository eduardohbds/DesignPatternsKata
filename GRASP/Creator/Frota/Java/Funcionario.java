
public class Funcionario {
	String cargo;
	String nome;
	public Funcionario (String nome, String cargo){
		this.nome = nome;
		this.cargo = cargo;
	}
	
	public void adicionaVeiculaNaFrota(String chassi, String tipo, Frota frota){
		if( this.cargo.equals("Gerente")){
			frota.adicionaVeiculo(new Veiculo(chassi,tipo));
		}
	}
}
