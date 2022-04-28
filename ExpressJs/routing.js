const express = require('express');
const app = express();
// create routing 

const data={
    name: 'John',
    job: 'Programmer'    
}
app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.get('/about', (req, res) => {
    res.send(data);
}
);

// start server
app.listen(3000, () => {
    console.log('App listening on port 3000!');
}
);