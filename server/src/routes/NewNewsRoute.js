const express = require('express');

const route = express.Router();
const { News } = require('../../db/models');

route.post('/', async (req, res) => {
  try {
    await News.create(req.body);
    res.json({ info: 'Пришло!' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
