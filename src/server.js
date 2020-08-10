

//Servidor
const express = require('express')
const server = express()
const {  
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
 } =  require('./pages')


//configurar nunjucks(template engine)
const nunjucks = require('nunjucks') //importei ele
nunjucks.configure('src/views',{
    express: server,
       noCache:true,  //guardar na memoria para devolver para a gente
})

//inicio e configu do servidor
//configurar arquivos estáticos (CSS,script,imagem)
server
.use(express.urlencoded({extended:true}))    //para tirar os dados q aparece no link do site
.use(express.static("public"))
 //rotas de aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes",saveClasses)
    .listen(5500) //start do server
