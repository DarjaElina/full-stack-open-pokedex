const express = require('express')
const app = express()
require('dotenv').config()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

function testFunc() {
  console.log('this will break the build'
};

app.get('/version', (req, res) => {
  res.send('8') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
