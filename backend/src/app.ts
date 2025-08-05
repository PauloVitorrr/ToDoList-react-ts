import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const prisma = new PrismaClient();

app.use(cors());

app.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    return res.status(200).json(tasks);
  } catch {
    return res.status(500).json({ error: "Error ao buscar tarefa" });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
  console.log("Pressione Ctrl+C para parar o servidor");
});
