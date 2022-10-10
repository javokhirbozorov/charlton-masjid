const bcrypt = require('bcrypt');

const { Admin } = require('../../db/models');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ where: { email }, raw: true });
    if (admin) {
      const passCheck = await bcrypt.compare(password, admin.password);
      if (passCheck) {
        res.json({ logIn: 'Done' });
      } else {
        res.json({ error: 'Invalid password' });
      }
    } else {
      res.json({ notFound: 'User not found' });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

const signUp = async (req, res) => {
  console.log('======>>>');
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

module.exports = { signUp, login };
