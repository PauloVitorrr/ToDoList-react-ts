import fastify from "fastify";
import { createActivy } from "./routes/create-activity";

const app = fastify();

app.register(createActivy);

app.listen({ port: 3333 }).then(() => {
  console.log("http server running!");
});
