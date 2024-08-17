import fastify from "fastify";
import { pessoaRoutes } from "@/http/controllers/pessoa/routes";
import { usuarioRoutes } from "./http/controllers/usuario/routes";
import { ZodError } from "zod";
import { env } from "process";
import { ResourceNotFoundError } from "./use-cases/errors/resource-not-found-error";

export const app = fastify();

app.register(pessoaRoutes);
app.register(usuarioRoutes);

app.setErrorHandler((error, _, reply) => {
  if(error instanceof ZodError) return reply.status(400).send({message: "Validation Error", errors: error.format()})

  if(env.NODE_ENV === 'development') console.error(error)

  if(error instanceof ResourceNotFoundError) return reply.status(404).send({message: 'Resource Not Found'})

  return reply.status(500).send({message: 'Internal Server Error', errors: error})
})