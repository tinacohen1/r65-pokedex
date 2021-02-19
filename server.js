require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))


console.log(process.env.API_TOKEN)

const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]

// -------- validation middleware
app.use(function validateBearerToken(req, res, next) {
  console.log('validate bearer token middleware')
  // move to the next middleware
  next()
})

// -------- end point /types
function handleGetTypes(req, res) {
  res.json(validTypes)
}
app.get('/types', handleGetTypes)

// -------- end point /pokemon
function handleGetPokemon(req, res) {
  res.send('Hello, Pokemon!')
}
app.get('/pokemon', handleGetPokemon)


const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

/*
endpints
http://localhost:8000/types
http://localhost:8000/pokemon
*/

