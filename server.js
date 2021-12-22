const  express =  require('express');
const bodyParser =  require( 'body-parser');
const  db =  require( './repositories/users'); 
require("dotenv").config();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')




const port = process.env.PORT || 3000;
const app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(cors())
app.listen(port, () => console.log(`Node-JWT-SQLite-Starer is listening on port ${port}!`));
app.use(bodyParser.json());






