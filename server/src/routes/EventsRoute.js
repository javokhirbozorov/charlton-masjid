const express = require('express');

const route = express.Router();
const { Event } = require('../../db/models');

route.get('/', async (req, res) => {
  try {
    const data = await Event.findAll({ raw: true });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
