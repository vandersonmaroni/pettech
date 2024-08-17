import { Pessoa } from "@/entities/pessoa.entitity";
import { Usuario } from "@/entities/usuario.entity";
import { database } from "@/lib/pg/db";

export class UsuarioRepository{
  public async create({username, password}:Usuario): Promise<Usuario | undefined> {
    const result = await database.clientInstance?.query<Usuario>(
      `INSERT INTO tb_usuario (username, password) VALUES($1, $2) RETURNING *`,
      [username,
        password
      ]
    )
    return result?.rows[0]
  }

  
  public async fundWidthPessoa(userId:number): Promise<Usuario & Pessoa | undefined>{
    const result = await database.clientInstance?.query(
      `SELECT * FROM tb_usuario as u 
      LEFT JOIN tb_pessoa as p 
      ON u.id = p.usuario_id 
      WHERE u.id = $1`,
    [userId]
    )
    return result?.rows[0];
  }
}