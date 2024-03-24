const express = require('express')
const app = express()
 const cors = require('cors')

 app.use(cors())

let notes = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "232n39-23-6423122"
  }
]
const generateId=()=>{
  
}
app.use(express.json())
app.post('/api/notes', (request, response) => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id)) 
    : 0
    
  const note = request.body
  note.id = maxId + 1

  notes = notes.concat(note)

  response.json(note)
})

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')

})

app.get('/api/notes/:id', (req,res)=>{
  id=req.params.id
  console.log(id)
 const note=notes.find(note=> note.id   )  
  if(note)
    res.json(note)
  else res.status(404).end
})
app.get('/api/notes', (request, response) => {
  response.json(notes)
})
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})
const morgan = require('morgan');


// تكوين Morgan باستخدام التكوين 'tiny'
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
console.log(morgan(':method :url :status :res[content-length] - :response-time ms'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})