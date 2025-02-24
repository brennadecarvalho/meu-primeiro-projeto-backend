const express = require("express") 
const router = express.Router() //configurando rota

const app = express() 
const porta = 3333 

//criarfunção para mostrar o Olá
function mostraOla(request, response) {
    response.send("Olá, mundo!")
}


function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta)
};

app.use(router.get('/ola',mostraOla))
app.listen(porta, mostraPorta) 
