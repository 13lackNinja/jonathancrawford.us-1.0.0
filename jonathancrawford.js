// Modules

const express = require('express');
const app = express();


// Middlewear

app.use(express.static('public'));


// Routes

app.get('/', (req, res) => {
  res.sendFile('/markup/index.html', { root: './public' });
});

// Port

app.listen(9000);
