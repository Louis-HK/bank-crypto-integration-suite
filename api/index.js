const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Bank Crypto API Running'));

app.listen(3000, () => console.log('API running on port 3000'));
