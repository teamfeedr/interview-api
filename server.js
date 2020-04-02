const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = process.env.PORT || 3004

app.get("/items", (req, res, next) => {
  res.json({ message: 'Hello world '});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});