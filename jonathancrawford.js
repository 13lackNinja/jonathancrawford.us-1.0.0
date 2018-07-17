// Modules

const express = require('express');
const app = express();
const bs = require('browser-sync').create();


// Middlewear

app.use(express.static('public'));


// Routes

app.get('/', (req, res) => {
  res.sendFile('/markup/index.html', { root: './public' });
});

// Port

const PORT = (process.env.PORT || 9000);
app.listen(PORT);
console.log(`listening on port ${PORT}...`);

// Live Reload

const bsOptions = {
  proxy: `localhost:${PORT}`,
  files: [
    './public/markup/*.html',
    './public/styles/*.css',
    './public/scripts/*.js',
    '.public/images/*.jpg'
  ],
};

bs.init(bsOptions);
bs.reload('*.html', '*.css', '*.js');
