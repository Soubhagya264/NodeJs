// const os =require('os');
// console.log(os.type());

// const car={
//     make: 'Honda',
//     model: 'Civic',
//     year: '2000',
// }

// console.log(car.make);
// module.exports=car;
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// // get request
// http.get("http://api.open-notify.org/astros.json", (res) => {
//   let data = "";
//   res.on("data", (chunk) => {
//     data += chunk;
//   });
//   res.on("end", () => {
//       let json = JSON.parse(data);
//     console.log(json);
//   });

//   console.log(`Got response: ${res.statusCode}`);
// });
// 

// post request
const http = require("https");
const data = JSON.stringify({
    name: "John",
    Job: "Programmer",
});

const options = {
    hostname: "reqres.in",
    path: '/api/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
    }
    const req = http.request(options, (res) => {
        let data = "";
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', (d) => {
            
            data += d;
        }
        )
        res.on('end', () => {
            console.log(data);
        });

        });
req.write(data);       
req.end(); 
