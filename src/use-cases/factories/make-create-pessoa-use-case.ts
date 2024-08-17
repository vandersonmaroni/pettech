import { PessoaRepository } from "@/repositories/pessoa.repository";
import { CreatePessoaUseCase } from "../create-pessoa";

export function makeCreatePessoaUseCase() {
  const pessoaRepository = new PessoaRepository();
  const createPessoaUseCase = new CreatePessoaUseCase(pessoaRepository)
  return createPessoaUseCase
}