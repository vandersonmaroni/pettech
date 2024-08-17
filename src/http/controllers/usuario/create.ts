import { makeCreateUserUseCase } from "@/use-cases/factories/make-create-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request:FastifyRequest, reply:FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string()
  })

  const {username, password} = registerBodySchema.parse(request.body);

  const createUsuario = makeCreateUserUseCase();
  const usuario = await createUsuario.handler({username, password});
  reply.status(201).send(usuario)
}