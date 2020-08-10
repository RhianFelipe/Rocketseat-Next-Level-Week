//exportamos o código do db
const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
	// Inserir dados
	proffyValue = {
		name: 'Luiz Gustavo Muller',
		avatar: 'https://scontent.fria3-1.fna.fbcdn.net/v/t1.0-9/11137114_974947785872472_4138925663123034127_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=wYwJvZdfATgAX9xBo6-&_nc_ht=scontent.fria3-1.fna&oh=3340545fa6fa04996bba6eba44a4ffbc&oe=5F517DA6',
		whatsapp: '899886622',
		bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
	}

	classValue = {
		subject: 1,
		cost: "200",
		// proffy_id virá pelo banco de dados
	}

	classScheduleValues = [
		//class_id virá pelo banco de dados, após cadastrarmos a class
		{
			weekday: 1,
			time_from: 720,
			time_to: 1220
		},
		{
			weekday: 0,
			time_from: 540,
			time_to: 1220
		}
	]

	//   await  createProffy(db, {proffyValue, classValue, classScheduleValues})


	//Consultar os dados inseridos:

	//Todos os proffys
	const selectedProffys = await db.all("SELECT * FROM proffys")
	// console.log(selectedProffys)

	//consultar as classes de um determinado professor
	//e trazer junto os dados do professor
	const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
       `)
	   //console.log(selectClassesAndProffys)

	   //o horário  que a pessoa  trabalha ,por exemplo e das 8h - até as 18h
	   //o horário  do time_from (8h) precisa  ser antes  ou igual  ao harário  solicitado
	   //o time_to precisa ser acima 
	   const selectClassesSchedule = await db.all(`
		SELECT  class_schedule.*
		FROM   class_schedule
		WHERE class_schedule.class_id = 1
		AND class_schedule.weekday = "0"
		AND class_schedule.time_from <= "520"
		AND class_schedule.time_to > "520"
	   `) 
  // console.log(selectClassesSchedule)

})