const express = require('express');

const route = express.Router();
const { Donation } = require('../../db/models');

route.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    await Donation.destroy({ where: { id } });
    res.json({ delete: 'DELETE!' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
