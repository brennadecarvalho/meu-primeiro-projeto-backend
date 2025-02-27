const express = require("express") //iniciando o express
const router = express.Router() //configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid')

const app = express() //iniciando o app
app.use(express.json()) //tratando as requisiçoes a partir de agr os dados estarao no formato json
const porta = 3333  //criando a porta

//criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Brenna De Carvalho',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQHhFDhiiprnkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719005607502?e=1746057600&v=beta&t=xqOOCoi2vLzm7ZDcbpyUoxUcJVRMbx_y-FGs1GwLTy4',
        minibio: 'Estudandode Analise e Desenvolvimento de Sistemas'
    },
    {
        id: '2',
        nome: 'Simara Conceição',
        imagem: 'https://media.licdn.com/dms/image/v2/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1563116727332?e=1746057600&v=beta&t=JA1QXsg1dGN4jz8KrD9qBwg8wJXDaglJaI2KRIwhzvI',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        id: '3',
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686007268307?e=1746057600&v=beta&t=r85d1HQLxhkEqiyhU8ZLWCnBRqsYqjf4Io1FVq_Kgco',
        minibio:'Fudadora da PrograMaria'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nomea: request.body.name,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher) //funcao que pega a nova mulher cadastrada 

    response.json(mulheres) //resposta que ira  enviar a lista atual + a nova mulhercadastrada
}

//PATCH
function corrigeMulher (request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada = request.body.imagem
    }

    response.json(mulheres)
}


//DELETE
function deletaMulher (request,response) {
    function todasMenosEla(mulher) {
        if (mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

//Rotas
app.use(router.get('/mulheres', mostraMulheres)) //configurado rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configurado rota POST /mulheres 
app.use(router.patch('/mulheres/:id', corrigeMulher)) //cofigurado rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurado rota DELETE /mulheres/:id

//PORTA
function mostraPorta () {
    console.log("Servidor criadoe rodando na porta ", porta)
};


app.listen(porta, mostraPorta) //servidorouvindo a porta