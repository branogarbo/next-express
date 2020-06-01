let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let server = express();
let port = 3001;

server.use(cors());
server.use(bodyParser.json());

let colors = ['green', 'red', 'blue', 'yellow'];

server.get('/boi', (req,res)=>{
   let ranNum = Math.floor(Math.random()*colors.length);

   res.json({color: colors[ranNum]});
});

server.listen(port, console.log(`listening on port ${port}`));