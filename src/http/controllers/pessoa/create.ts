import { makeCreatePessoaUseCase } from "@/use-cases/factories/make-create-pessoa-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    nome: z.string(),
    nascimento: z.coerce.date(),
    email: z.string().email(),
    usuario_id: z.number()
  });

  const { cpf, nome, nascimento, email, usuario_id } = registerBodySchema.parse(
    request.body
  );

  const createPessoaUseCase = makeCreatePessoaUseCase();

  const result = await createPessoaUseCase.handler({ cpf, nome, nascimento, email, usuario_id });

  reply.status(201).send(result);

}
