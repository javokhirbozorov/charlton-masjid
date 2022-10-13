const bcrypt = require('bcrypt');

const { Admin } = require('../../db/models');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ where: { email }, raw: true });
    if (admin) {
      const passCheck = await bcrypt.compare(password, admin.password);
      if (passCheck) {
        req.session.user = admin.username;
        req.session.user_id = admin.id;
        req.session.email = admin.email;
        req.session.save(() => {
          res.json({ logIn: 'Done', username: admin.username, email: admin.email });
        });
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
        const admin = await Admin.create({ email, username, password: hash });
        req.session.user = admin.username;
        req.session.user_id = admin.id;
        req.session.email = admin.email;
        req.session.save(() => {
          res.json({ message: 'Admin created', username: admin.username, email: admin.email });
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const checkAdmin = async (req, res) => {
  if (req.session.user) {
    res.json({ admin: 'Done', username: req.session.user, email: req.session.email });
  } else {
    res.json({ dontAdmin: 'Not done' });
  }
};

module.exports = { signUp, login, checkAdmin };
