const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
// configuring the db
connectDB();
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true
//   })
//   .then(() => {
//     console.log('DB Connected');

//     mongoose.connection.on('err', (err) => {
//       console.log(`DB connection error: ${err.message}`);
//     });
//   });

//   MIDDLEWARE
// 1. morgan - monitoring loading of app
app.use(morgan('dev'));
// 2. body-parser (pull data from create post req.body in controller -> json format)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 3. cookie-parser
app.use(cookieParser());

// ROUTES

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  // serve the above static index.html file
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });
}

// app.get('/', (req, res) => res.send('app is running')); ===> removed for deployment

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌎 ==> femBOSS app is listening on PORT ${PORT}`);
});
