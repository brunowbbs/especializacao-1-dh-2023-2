// import express from "express"

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const TarefaSchema = require("./schemas/TarefaSchema");

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.swptuzk.mongodb.net/my_db?retryWrites=true&w=majority"
);

// const tarefas = [
//   {
//     id: 1,
//     description: "teste 1",
//   },
//   {
//     id: 2,
//     description: "teste 2",
//   },
//   {
//     id: 3,
//     description: "teste 3",
//   },
// ];

app.get("/", (request, response) => {
  return response.json({ Ping: "Pong" });
});

//GET ALL
app.get("/tarefas", async (request, response) => {
  const res = await TarefaSchema.find();
  return response.json(res);
});

//GET BY ID
app.get("/tarefas/:id", async (request, response) => {
  const id = request.params.id;

  const res = await TarefaSchema.findById(id);

  if (!res) {
    return response.status(404).json({ message: "item not found" });
  }

  return response.json(res);

  // console.log(request.params.id);

  // const tarefa = tarefas.find(
  //   (tarefa) => tarefa.id === Number(request.params.id)
  // );

  // if (!tarefa) {
  //   return response.status(404).json({ message: "item not found" });
  // }

  // return response.json(tarefa);
});

app.post("/tarefas", async (request, response) => {
  const res = await TarefaSchema.create(request.body);

  // const body = request.body;
  // tarefas.push({ ...body, id: Date.now() });

  return response.status(201).json(res);
});

app.delete("/tarefas/:id", async (request, response) => {
  const id = request.params.id;
  try {
    await TarefaSchema.findByIdAndRemove(id);

    return response.status(204).json();
  } catch (error) {
    return response.status(500).json();
  }
});

app.put("/tarefas/:id", async (request, response) => {
  const id = request.params.id;
  const body = request.body;

  const res = await TarefaSchema.findByIdAndUpdate({ _id: id }, body);

  return response.json(res);

  // const indexTarefa = tarefas.findIndex(
  //   (tarefa) => tarefa.id === Number(request.params.id)
  // );

  // tarefas[indexTarefa].description = request.body.description;

  // return response.json({ ok: "ok" });
});

app.listen(PORT, () =>
  console.log("Servidor foi iniciado com sucesso em http://localhost:" + PORT)
);
