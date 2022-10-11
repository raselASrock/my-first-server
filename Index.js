const express = require('express');
const app = express();
const phones = require('./phones.json')
const port = 5000


app.get('/', (req , res) =>{
    res.send('hLok Mama ello world from node')
});

app.get('/phones', (req, res) => {
    res.send(phones)
});


app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('Lokking for data in id:', id);

    const phone = phones.find(ph => ph.id === id) || {};
    res.send(phone)
});


app.listen(port,()=>{
    console.log(`Server running on your port: ${port}`);
})