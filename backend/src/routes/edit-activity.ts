import { FastifyInstance } from "fastify";
import { Item, Params } from "../interfaces";
import { prisma } from "../lib/prisma";

export async function editActivy(app: FastifyInstance) {
  app.put<{ Params: Params; Body: Item }>(
    "/tasks/edit/:id",
    async (request, reply) => {
      const { id } = request.params;
      const { activity, isChecked } = request.body;

      try {
        const editActivy = await prisma.task.update({
          where: {
            id,
          },
          data: {
            activity,
            isChecked,
          },
        });
        reply.send({ editActivy });
      } catch (error) {
        reply.send(error);
      }
    }
  );
}
