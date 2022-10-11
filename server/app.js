require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const dbCheck = require('./db/dbCheck');

// импорт роутов
const NewsRoute = require('./src/routes/NewsRoute');
const PostsRoute = require('./src/routes/PostsRoute');
const EventsRoute = require('./src/routes/EventsRoute');

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
