const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HEWWO')  
});

const PORT = 3000;

app.listen(3000, () => {
    console.log("You're listening to PORT " + PORT);
});
