const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/aggie-card', (req, res) => {
    const formData = req.body;
    const aggieCard = generateAggieCard(formData);
    res.send(aggieCard);
  });

app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});