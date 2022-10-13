require('dotenv').config();
require('@babel/register');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

const cors = require('cors');
const { sequelize } = require('./db/models');

const { SESSION_SECRET } = process.env || 'secret';
const authRouter = require('./src/routes/authRoute');

const dbCheck = require('./db/dbCheck');

// импорт роутов
const NewsRoute = require('./src/routes/NewsRoute');
const PostsRoute = require('./src/routes/PostsRoute');
const EventsRoute = require('./src/routes/EventsRoute');
const AdmisRoute = require('./src/routes/AdminsRoute');
const NewEventRoute = require('./src/routes/NewEventRoute');
const NewPostRoute = require('./src/routes/NewPostRoute');
const NewNewsRoute = require('./src/routes/NewNewsRoute');
const NewAdminRoute = require('./src/routes/NewAdminRoute');
const NewDonationRoute = require('./src/routes/NewDonationRoute');
const donationsRoute = require('./src/routes/donationsRoute');
const DelPostRoute = require('./src/routes/DelPostRoute');
const DelNewsRoute = require('./src/routes/DelNewsRoute');
const DelEventRoute = require('./src/routes/DelEventRoute');
const DelDonateRoute = require('./src/routes/DelDonateRoute');
const DelAdminRoute = require('./src/routes/DelAdminRoute');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbCheck();

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// роутинг
app.use('/api', authRouter);
app.use('/news', NewsRoute);
app.use('/admins', AdmisRoute);
app.use('/posts', PostsRoute);
app.use('/events', EventsRoute);
app.use('/newevent', NewEventRoute);
app.use('/newpost', NewPostRoute);
app.use('/newnews', NewNewsRoute);
app.use('/newadmin', NewAdminRoute);
app.use('/newdonation', NewDonationRoute);
app.use('/donations', donationsRoute);
app.use('/delpost', DelPostRoute);
app.use('/delnews', DelNewsRoute);
app.use('/delevent', DelEventRoute);
app.use('/deldonate', DelDonateRoute);
app.use('/deladmin', DelAdminRoute);

const PORT = process.env.PORT || 3001;
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
app.use(session(sessionConfig));

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
