import { Pessoa } from "@/entities/pessoa.entitity";
import { Usuario } from "@/entities/usuario.entity";
import { UsuarioRepository } from "@/repositories/usuario.repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class FindWithPessoaUseCase{
  constructor(private usuarioRepository: UsuarioRepository){}

  async handler(userId: number): Promise<Usuario & Pessoa | undefined> {
    const result = await this.usuarioRepository.fundWidthPessoa(userId);
    
    if(!result) throw new ResourceNotFoundError()
    
      return result;
  }
}