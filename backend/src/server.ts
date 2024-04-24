import fastify from "fastify";
import { createActivy } from "./routes/create-activity";
import { getActivity } from "./routes/get-activity";
import { deleteActivity } from "./routes/delete-activity";
import { editActivy } from "./routes/edit-activity";

const app = fastify();

app.register(createActivy);
app.register(getActivity);
app.register(deleteActivity);
app.register(editActivy);

app.listen({ port: 3333 }).then(() => {
  console.log("http server running!");
});
