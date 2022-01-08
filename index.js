const express = require('express');
const app = express();
const porta = process.env.PORT || 3001;


app.listen(porta, () =>{
    console.log(`You dit it, server running on port ${porta}`)
})
