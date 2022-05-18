// // declarations
// require('dotenv').config()
// const {ENVIROMENT, PORT} = process.env;
// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // db connection
// const db = require('./configs/db.config');

// // routes import
// const mainRoutes = require('./routes/mainRoutes');
// const openaiRoutes = require('./routes/openai');

// const app = express();

// // middleware setup
// app.use(morgan(ENVIROMENT));
// app.use(cors())
// app.use(bodyParser.json());

// // routes
// app.use('/main', mainRoutes(db));
// // app.use('/openai', openaiRoutes());


// app.get('/', (req, res) => {
// 	res.json({greetings: 'hello world'});
// })

// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));