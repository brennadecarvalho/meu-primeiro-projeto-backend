const express = require("express") 
const router = express.Router()

const app = express() 
const porta = 3333 

const mulheres = [
    {
        nome: 'Brenna De Carvalho',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQHhFDhiiprnkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719005607502?e=1746057600&v=beta&t=xqOOCoi2vLzm7ZDcbpyUoxUcJVRMbx_y-FGs1GwLTy4',
        minibio: 'Estudandode Analise e Desenvolvimento de Sistemas'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://media.licdn.com/dms/image/v2/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1563116727332?e=1746057600&v=beta&t=JA1QXsg1dGN4jz8KrD9qBwg8wJXDaglJaI2KRIwhzvI',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686007268307?e=1746057600&v=beta&t=r85d1HQLxhkEqiyhU8ZLWCnBRqsYqjf4Io1FVq_Kgco',
        minibio:'Fudadora da PrograMaria'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta () {
    console.log("Servidor criadoe rodando na porta ", porta)
};

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta) 