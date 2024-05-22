const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const date = new Date().toLocaleString();
    res.render('index', {
        date: date
    });
});

app.get('/products', (req, res) => {
    res.render('products');
});


app.get('/profile', (req, res) => {
    let user = {
        nom : "Yazid" ,
        prenom : "CHERIFI" ,
        email : "mohamedyazid@gmail.com" ,
        admin : false
    }
    res.render('profile', {
        user : user , // On peut avoir { user }
    });
    // res.render('products');
});






app.listen(3000, () => {
    console.log("Server started at: http://localhost:3000");
});