require('dotenv').config();
require('@babel/register');
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./db/models');

const authRouter = require('./src/routes/authRoute');

const app = express();

const corsOptions = {
  credentials: true,
  origin: '*',
};

app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3003;

app.use('/api', authRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
