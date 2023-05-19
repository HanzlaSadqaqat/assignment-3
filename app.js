let express= require("express")
let bodyParser = require("body-parser")
let app= express();
app.use(express.json())
let courses=[
    {id: 1, subject: "subject1"},
    {id: 2, subject: "subject2"},
    {id: 3, subject: "subject3"}
]

app.get("/", (req, res)=>{
    res.send("Welcome to Home Page")
})

app.get("/courses", (req, res)=>{
    res.send(courses)
})

app.get("/courses/:sub" , (req, res)=>{
    let sub= req.params.sub
    console.log(sub)
    let course= {
        id: courses.length +1,
        subject: sub
    }
    console.log(req.body)
    courses.push(course);
    res.send(course)
})

app.listen(2000, () =>{
    console.log("server started at 2000")
})