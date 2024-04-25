import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getActivity(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    const getTask = await prisma.task.findMany();

    return reply.status(201).send({ getTask });
  });
}
