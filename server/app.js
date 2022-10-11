require('dotenv').config();

const express = require('express');
// const morgan = require('morgan');
// const path = require('path');
const cors = require('cors');

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

const app = express();

dbCheck();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

// роутинг
app.use('/news', NewsRoute);
app.use('/admins', AdmisRoute);
app.use('/posts', PostsRoute);
app.use('/events', EventsRoute);
app.use('/newevent', NewEventRoute);
app.use('/newpost', NewPostRoute);
app.use('/newnews', NewNewsRoute);
app.use('/newadmin', NewAdminRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
