import { Usuario } from "@/entities/usuario.entity";
import { UsuarioRepository } from "@/repositories/usuario.repository";

export class CreateUsuarioUseCase {
  constructor(private usuarioRepository: UsuarioRepository){}

  async handler(usuario:Usuario): Promise<Usuario|undefined> {
    return await this.usuarioRepository.create(usuario);
  }
}