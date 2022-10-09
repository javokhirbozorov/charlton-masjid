const router = require('express').Router();
const { Donation } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const donationData = await Donation.findAll({ order: ['createdAt'] });

    res.json(donationData);
  } catch (err) {
    console.log('THIS IS ERROR BECAUSE OF YOU', err);
  }
});

router.post('/makePayment', (req, res) => {
  try {
    const { email } = req.body;
    console.log(email, '😀😀😀😀');
  } catch (err) { console.log(err); }
});

module.exports = router;
