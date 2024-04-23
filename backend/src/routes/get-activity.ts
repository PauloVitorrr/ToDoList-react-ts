import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { Item } from "../interfaces";

export async function getActivity(app: FastifyInstance) {
  app.get<{ Body: Item }>("/tasks/:getActivity", async (request, reply) => {
    const getTask = await prisma.task.findMany();

    return reply.status(201).send({ getTask });
  });
}
