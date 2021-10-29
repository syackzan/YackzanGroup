const express = require('express');
const path = require('path');
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.post('/send', (req, res) => {
  console.log(req.body);
})

app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
