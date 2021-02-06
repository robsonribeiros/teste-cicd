require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({msg: 'Jaque diz: Olá Mundo do Docker!!!'})
})

app.listen(process.env.PORT, () => {
  console.info(`API is Runinng in http://localhost:${process.env.PORT}`)
})
