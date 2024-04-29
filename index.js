const express = require('express')

const app = express(),
  port = process.env.PORT || 3000

app.get('/', (_request, response) => {
  response.status(200).send({ hello: 'World' })
})

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
