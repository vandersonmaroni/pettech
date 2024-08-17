import { Pessoa } from "@/entities/pessoa.entitity";
import { PessoaRepository } from "@/repositories/pessoa.repository";

export class CreatePessoaUseCase {
  constructor(private pessoaRepository: PessoaRepository) {}

  async handler(pessoa: Pessoa) {
    return await this.pessoaRepository.create(pessoa);
  }
}
