const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
app.use(morgan('common'));
const cors = require('cors');
app.use(cors());

let port = process.env.PORT || 3000;

let dbConfig = require('./onsite-config/db-config.json');
let databaseUrl = `mongodb://${dbConfig.server}:${dbConfig.port}`;

mongoose.connection.on('error', err => {
  console.log('Error connecting to DB! ', err);
  process.exit(1)
;
});

mongoose.connect(`${databaseUrl}/myappdb`);



app.get('/', (req, res) => res.send('Hello World!'));
app.use('/products', require('./controllers/products-api'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));