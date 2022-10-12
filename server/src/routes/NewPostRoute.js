const express = require('express');

const route = express.Router();
const { Posts } = require('../../db/models');

route.post('/', async (req, res) => {
  try {
    await Posts.create(req.body);
    res.json({ info: 'Пришло!' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
