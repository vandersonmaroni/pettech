import { Pessoa } from "@/entities/pessoa.entitity";
import { database } from "@/lib/pg/db";

export class PessoaRepository {
  async create({cpf, nome, nascimento, email, usuario_id}: Pessoa): Promise<Pessoa | undefined> {
    const result = await database.clientInstance?.query(
      `INSERT INTO tb_pessoa (cpf, nome, nascimento, email, usuario_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [cpf, nome, nascimento, email, usuario_id]
    )

    return result?.rows[0];
  }
}
