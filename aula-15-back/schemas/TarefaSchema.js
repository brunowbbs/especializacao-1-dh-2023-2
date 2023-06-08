const { Schema, model } = require("mongoose");

const TarefaSchema = new Schema({
  description: String,
});

module.exports = model("Tarefa", TarefaSchema);

// export default TarefaSchema
