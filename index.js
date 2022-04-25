// const os =require('os');
// console.log(os.type());

// const car={
//     make: 'Honda',
//     model: 'Civic',
//     year: '2000',
// }

// console.log(car.make);
// module.exports=car;

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// get request
http.get("http://api.open-notify.org/astros.json", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
      let json = JSON.parse(data);
    console.log(json);
  });

  console.log(`Got response: ${res.statusCode}`);
});
