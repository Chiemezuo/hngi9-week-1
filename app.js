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

app.post('/', (req, res) => {
  const { operation_type, x, y } = req.body

  if (isNaN(x) || isNaN(y))
    return res.send({
      error: "Stop being sneaky, put in the right parameters"
    })

  let result = ''

  if (operation_type.toLowerCase() === "addition") {
    result = +x + +y
  }
  else if (operation_type.toLowerCase() === "multiplication") {
    result = +x * +y
  }
  else if (operation_type.toLowerCase() === "subtraction") {
    result = +x - +y
  }
  else return res.send({
    error: "Put in an operation_type of 'addition', 'multiplication', or 'subtraction' "
  })

  res.send({
    slackUsername: 'Chiemezuo',
    result,
    operation_type
  })
})

app.listen(port, () => {
  console.log("Up and running")
})