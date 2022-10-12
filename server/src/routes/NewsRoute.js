const express = require('express');

const route = express.Router();
const { News } = require('../../db/models');

route.get('/', async (req, res) => {
  try {
    const data = await News.findAll({ raw: true });
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
