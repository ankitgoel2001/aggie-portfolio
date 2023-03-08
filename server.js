const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
import { generateAggieCard } from '../utils';

const app = express();
const port = 3000; 

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));
app.use(express.static(path.join(__dirname, 'build')));


app.post('/api/aggie-card', (req, res) => {
    const formData = req.body;
    const aggieCard = generateAggieCard(formData);
    res.send(aggieCard);
  });


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});