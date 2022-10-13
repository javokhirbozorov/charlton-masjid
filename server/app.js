require('dotenv').config();
require('@babel/register');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./db/models');

const authRouter = require('./src/routes/authRoute');

const app = express();
const { SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'Session',
  store: new FileStore(),
  secret: SESSION_SECRET ?? '123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
};

app.use(session(sessionConfig));
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
