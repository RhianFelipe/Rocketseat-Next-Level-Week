//Procurar o botão
document.querySelector("#add-time")

//Quando clicar no botão
.addEventListener('click',cloneFlied) //"ouvidor de evento"   .addEventListener('click','tipodeAção')

//Executar  uma ação
function cloneFlied() {
   
    //duplicar os campos,mas o meu querido notebook pergunta,que campos?ora notebook n se preucupe,eu tenho a reposta!:
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// Esse campo meu caro notebook!!Clone ele!com meu CloneNode!haha,mas só se for true

   //pegar  os campas msm sem eu saber onde né Rhian,fala logo!

const field = newFieldContainer.querySelectorAll('input') //aq rapaz,todo dado input,coloca no fields para mim

 // field[0].value ="" //pegando a posição zero e atribuindo um valor nulo,para não se  repetir,mas não é o melhor a se fazer
// field[1].value ="" //pegando a posição um e atribuindo um valor nulo,para não se  repetir,mas não é o melhor a se fazer

 //para cada campo limpar,melhor jeito é usar repetições

field.forEach(function(field) {
     //pegar o fields do momento e limpa ele

  field.value = ""
  
})  //para cada 
    
    //colocar  na página,po meu caro Rhian,onde????
    document.querySelector("#schedule-items").appendChild( newFieldContainer )   //aqui nobre notebook!  appendChild() //adiciona um filho

    }
    