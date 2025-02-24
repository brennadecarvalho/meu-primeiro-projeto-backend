//servir as informações solicitadas pelo cliente

const express = require("express") //carregue o  pacote

const app = express() //chama fução expressparacriar uma aplicação e guarde na constante app
const porta = 3333 //definir numero da porta

function mostraPorta () {
    console.log("Servidor criadoe rodando na porta ", porta)
};

app.listen(porta, mostraPorta) //escuta a porta e mostra