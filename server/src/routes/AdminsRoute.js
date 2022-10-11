const express = require('express');

const route = express.Router();
const { Admin } = require('../../db/models');

route.get('/', async (req, res) => {
  const data = await Admin.findAll({ raw: true });
  res.json(data);
});

module.exports = route;
