export class Pessoa {
  id?: number;
  cpf: string;
  nome: string;
  nascimento: Date;
  email: string;
  usuario_id?: number;

  constructor(cpf: string, nome: string, nascimento: Date, email: string, usuario_id:number) {
    this.cpf = cpf;
    this.nome = nome;
    this.nascimento = nascimento;
    this.email = email;
    this.usuario_id = usuario_id;
  }
}
