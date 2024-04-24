const express = require("express")

const checkListRouter = require('./src/routes/checklist')

const app = express()

//usado para mandar json.
app.use(express.json())

app.use('/checklists', checkListRouter)

app.listen(3000, () => {
    console.log('O servidor foi iniciado.')
})