const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/time', (req, res) => {
  res.json({currentTime: new Date().toISOString()});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});