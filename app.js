const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello DEMO!'),
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Export app for testing
module.exports = app
