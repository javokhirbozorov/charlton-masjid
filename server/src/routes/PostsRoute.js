const express = require('express');

const route = express.Router();
const { Posts } = require('../../db/models');

route.get('/', async (req, res) => {
  try {
    const data = await Posts.findAll({ raw: true });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
