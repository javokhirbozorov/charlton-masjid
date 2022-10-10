const express = require('express');

const app = express();

require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

// for correct ecoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// it unblocks interacting with other ports
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3001/tick'],
}));

// Routes

const donationsRoute = require('./src/routes/donationsRoute');

app.use('/donations', donationsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
