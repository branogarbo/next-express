let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let server = express();
let port = 3001;

server.use(cors());
server.use(bodyParser.json());

let ranInt = (lower,upper) => Math.floor(Math.random()*(upper-lower+1))+lower;

server.get('/boi', (req,res)=>{
   res.json({color: `rgb(${ranInt(0,255)},${ranInt(0,255)},${ranInt(0,255)})`});
});

server.listen(port, console.log(`listening on port ${port}`));