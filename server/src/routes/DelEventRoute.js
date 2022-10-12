const express = require('express');

const route = express.Router();
const { Event } = require('../../db/models');

route.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    await Event.destroy({ where: { id } });
    res.json({ delete: 'DELETE!' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
