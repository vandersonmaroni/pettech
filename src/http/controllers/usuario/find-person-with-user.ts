import { UsuarioRepository } from "@/repositories/usuario.repository";
import { MakeFindWithPessoa } from "@/use-cases/factories/make-find-with-pessoa";
import { FindWithPessoaUseCase } from "@/use-cases/find-with-pessoa";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findPersonWithUser(request: FastifyRequest, reply: FastifyReply){
  const registerParamsSchema = z.object({
    id: z.coerce.number()
  })

  const {id} = registerParamsSchema.parse(request.params);

  const findWithPersonUseCase = MakeFindWithPessoa()
  const result = await findWithPersonUseCase.handler(id);

  reply.status(200).send(result)

}