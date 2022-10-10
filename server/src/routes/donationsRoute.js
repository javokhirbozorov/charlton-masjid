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

router.post('/makePayment', async (req, res) => {
  try {
    console.log(req.body);
    const { donationAmount, donationId } = req.body;

    const donation = await Donation.findByPk(donationId);
    let { total } = donation;
    total += Number(donationAmount);
    donation.total = total;
    donation.save();
    res.status(200).end();
    console.log(total);
  } catch (err) { console.log(err); }
});

module.exports = router;
