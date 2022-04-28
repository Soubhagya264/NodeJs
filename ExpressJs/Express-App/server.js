const express = require('express');
const app = express();
const path=require('path');

app.set('view engine', 'pug');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
}
);

app.post('/form_submit', (req, res) => {
   
    const name = req.body.username;
    const email = req.body.email;
    const message = req.body.message;
    console.log(name);
    console.log(email);
    console.log(message);
    res.end('USER NAME ' + name + 'EMAIL ' + email + 'MESSAGE ' + message);


    
}



).listen(3000, () => {
    console.log('App listening on port 3000!');
}
);