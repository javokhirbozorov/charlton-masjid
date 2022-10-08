const router = require('express').Router();
const { Donation } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const donationData = await Donation.findAll({ order: ['createdAt'] });
    console.log('😀😀DATA😀', donationData);
    res.json(donationData);
  } catch (err) {
    console.log('THIS IS ERROR BECAUSE OF YOU', err);
  }
});

module.exports = router;
