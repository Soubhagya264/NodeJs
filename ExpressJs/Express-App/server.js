const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
}
).listen(3000, () => {
    console.log('App listening on port 3000!');
}
);