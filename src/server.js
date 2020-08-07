//Templates
const proffys = [
    {name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "89897845", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to:[1220]},
    {name: "Vinicius Reis", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "89897845", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", subject: "Química", 
    cost: "20", 
    weekday: [1], 
    time_from: [720], 
    time_to:[1220]},
    {name: "Mayk Brito", 
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
    whatsapp: "89897845", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", subject: "Química", 
    cost: "20", 
    weekday: [1], 
    time_from: [720], 
    time_to:[1220]}
]
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
//Config of pages routes requests
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}
function pageLanding(req, res)  {
    return res.render("index.html")
}
//Render is a property of nunjucks
function pageStudy(req,res) {
    const filters = req.query //It's the way to get the request from the bronswer that comes after ?. They come as objects, you can see it from console.log(req.query)
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res) {
    const data = req.query
    // Transforming those datas in arrays([]), and checking if there are elements
    const isNotEmpty = Object.keys(data).length > 0
    //if data != [ ], add to subjects
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    //else, don't add, just show the same page
    return res.render("give-classes.html", {subjects, weekdays})
}
//Config of exportations
const express = require('express')
const server = express ()
const nunjucks = require('nunjucks')
//Config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//Configuration of server(routes)
server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5000)

