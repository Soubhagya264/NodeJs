const express = require('express');
const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.listen(3000, () => {
//     console.log('Example app listening on port 3000!');
// });
const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}
const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}
app.use(express.static('public'));
app.use(myLogger);
app.use(requestTime);

app.get('/', (req, res) => {
    res.send('Hello World! ' + req.requestTime);
}
);
app.listen(3000, () => {
    console.log('App listening on port 3000!');
}
);