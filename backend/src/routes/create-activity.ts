import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { Item } from "../interfaces";

export async function createActivy(app: FastifyInstance) {
  app.post<{ Body: Item }>("/tasks", async (request, reply) => {
    const { isChecked, activity } = request.body;
    const task = await prisma.task.create({
      data: {
        activity,
        isChecked,
      },
    });

    return reply.status(201).send({ task });
  });
}
