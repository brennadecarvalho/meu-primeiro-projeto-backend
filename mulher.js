const express = require("express") 
const router = express.Router()

const app = express() 
const porta = 3333 
function mostraMulher(request ,response) {
    response.json({
        nome: 'Brenna De Carvalho',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQHhFDhiiprnkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719005607502?e=1746057600&v=beta&t=xqOOCoi2vLzm7ZDcbpyUoxUcJVRMbx_y-FGs1GwLTy4',
        minibio: 'Estudante de Análise e Desenvolvimento de Sistemas'
    })
}

function mostraPorta () {
    console.log("Servidor criadoe rodando na porta ", porta)
};

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta) 