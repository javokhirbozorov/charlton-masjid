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
const NewDonationRoute = require('./src/routes/NewDonationRoute');
const donationsRoute = require('./src/routes/donationsRoute');
const DelPostRoute = require('./src/routes/DelPostRoute');
const DelNewsRoute = require('./src/routes/DelNewsRoute');
const DelEventRoute = require('./src/routes/DelEventRoute');
const DelDonateRoute = require('./src/routes/DelDonateRoute');
const DelAdminRoute = require('./src/routes/DelAdminRoute');

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
app.use('/newdonation', NewDonationRoute);
app.use('/donations', donationsRoute);
app.use('/delpost', DelPostRoute);
app.use('/delnews', DelNewsRoute);
app.use('/delevent', DelEventRoute);
app.use('/deldonate', DelDonateRoute);
app.use('/deladmin', DelAdminRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
