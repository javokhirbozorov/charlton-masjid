const bcrypt = require('bcrypt');

const { Admin } = require('../../db/models');

const signIn = (req, res) => {
  res.json({ message: 'Hello' });
};

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  if (email && username && password) {
    try {
      const checkIfEmailExists = await Admin.findOne({ where: { email } });
      if (checkIfEmailExists) {
        res.json({ emailExists: 'This mail is already in use' });
      } else {
        const hash = await bcrypt.hash(password, 10);
        await Admin.create({ email, username, password: hash });
        res.json({ message: 'Admin created' });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = { signUp, signIn };
