import { UsuarioRepository } from "@/repositories/usuario.repository";
import { CreateUsuarioUseCase } from "../create-usuario";

export function makeCreateUserUseCase(){
  const usuarioRepository = new UsuarioRepository();
  const createUserUseCase = new CreateUsuarioUseCase(usuarioRepository);
  return createUserUseCase;
}