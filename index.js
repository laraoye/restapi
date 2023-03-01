const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send([1,2,3])
})

app.get('/api/courses/:id', (req, res)  => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) return res.status(404).send('The course with the given ID was not found')
  res.send(course);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
