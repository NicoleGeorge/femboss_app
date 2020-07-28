const express = require('express');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
// configuring the db

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB Connected');

    mongoose.connection.on('err', (err) => {
      console.log(`DB connection error: ${err.message}`);
    });
  });

// ROUTES

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.get('/', (req, res) => res.send('app is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌎 ==> femBOSS app is listening on PORT ${PORT}`);
});
