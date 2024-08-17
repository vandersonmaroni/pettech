import { UsuarioRepository } from "@/repositories/usuario.repository";
import { FindWithPessoaUseCase } from "../find-with-pessoa";

export function MakeFindWithPessoa(){
  const usuarioRepository = new UsuarioRepository();
  const findWithPersonUseCase = new FindWithPessoaUseCase(usuarioRepository);
  return findWithPersonUseCase;
}