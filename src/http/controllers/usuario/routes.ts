import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findPersonWithUser } from "./find-person-with-user";

export async function usuarioRoutes(app: FastifyInstance){
  app.post('/usuario', create)
  app.get('/usuario/:id', findPersonWithUser)
}