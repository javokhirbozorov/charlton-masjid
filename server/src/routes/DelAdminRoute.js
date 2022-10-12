const express = require('express');

const route = express.Router();
const { Admin } = require('../../db/models');

route.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    await Admin.destroy({ where: { id } });
    res.json({ delete: 'DELETE!' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
