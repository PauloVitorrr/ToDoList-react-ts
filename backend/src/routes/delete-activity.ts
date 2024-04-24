import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { Params } from "../interfaces";

export async function deleteActivity(app: FastifyInstance) {
  app.delete<{ Params: Params }>("/tasks/:id", async (request, reply) => {
    const { id } = request.params;

    try {
      const taskDelete = await prisma.task.delete({
        where: {
          id,
        },
      });
      reply.send({ taskDelete });
    } catch (error) {
      reply.send(error);
    }
  });
}
