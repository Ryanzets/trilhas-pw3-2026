const express = require('express');
const cors = require('cors');
const loginRouters = require("./src/routers/loginRouters");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/login', loginRouters);

app.listen(3000, () => {
   console.log("Servidor rodando na porta 3000");
})
