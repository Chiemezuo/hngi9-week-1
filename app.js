const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    slackUsername: "Chiemezuo",
    backend: true,
    age: 22,
    bio: "Just some random guy trying to have fun with computers"
  })
})

app.listen(port, () => {
  console.log("Up and running")
})