// app.js (ou index.js)

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req: any, res: any) => {
  const tasks = [
    { id: 1, name: "Aprender React Hooks", isChecked: false },
    { id: 2, name: "Configurar API no Express", isChecked: true },
    { id: 3, name: "Refatorar componente App.tsx", isChecked: false },
  ];
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
  console.log("Pressione Ctrl+C para parar o servidor");
});
