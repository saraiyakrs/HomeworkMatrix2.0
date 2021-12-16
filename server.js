const express = require('express')
const app = new express()
const db = require('better-sqlite3')('StudentLogin.db')

app.use(express.static('./client/build'))
app.use(express.json())

app.get('/login',(req,res) => {
    const query = db.prepare("SELECT * FROM login")
    const login = query.all()
    res.json({
        login
    })
})
app.post("/login",(req,res) => {
    const {Id} = req.body
    const query = db.prepare("INSERT INTO login (id, FirstName, LastName, StudentID)VALUES ('?', '?', '?', '?');")
    const result = query.run(Id);
})


app.listen(8080,() => {
    console.log("server started")
})