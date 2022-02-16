const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:name', (req, res) => {
  if (req.params.name === 'index.html') {
    res.sendFile(__dirname + '/index.html');
  } else if (req.params.name === 'company.html') {
    res.sendFile(__dirname + '/company.html');
  } else if (req.params.name === 'essSolution.html') {
    res.sendFile(__dirname + '/essSolution.html');
  } else if (req.params.name === 'develpmentFeild.html') {
    res.sendFile(__dirname + '/develpmentFeild.html');
  } else if (req.params.name === 'blockchain.html') {
    res.sendFile(__dirname + '/blockchain.html');
  } else if (req.params.name === 'essmap.html') {
    res.sendFile(__dirname + '/essmap.html');
  }
});

app.listen(PORT, () => {
  console.log(`listen : ${[PORT]}`);
});
