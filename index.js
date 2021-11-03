const express = require('express')
const cors = require('cors')
const path = require('path');
const gptResponse = require('./OpenAI')
const app = express()
const port = process.env.PORT || 4000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.post('/codex', async (req, res) => {
  try {
    const {q} = req.query
    const answer = await gptResponse(q)
    if (!answer) return res.status(404).send('לא נמצאה תשובה')
    res.send({answer})
  } catch (error) {
    console.log(error)
  }
})


app.listen(port, () => console.log(`Listening on port ${port}`))