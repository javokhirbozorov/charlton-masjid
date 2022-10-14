const express = require('express');
const bcrypt = require('bcrypt');

const route = express.Router();
const { Admin } = require('../../db/models');

route.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  if (email && username && password) {
    try {
      const checkIfEmailExists = await Admin.findOne({ where: { email } });
      if (checkIfEmailExists) {
        res.json({ emailExists: 'This mail is already in use' });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const admin = await Admin.create({ email, username, password: hash });
        console.log(admin);
        res.json({ info: 'Админ создан!' });
      }
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = route;
