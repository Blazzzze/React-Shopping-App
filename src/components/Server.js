const express = require('express');
const Razorpay = require('razorpay');
const shortid = require('shortid');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'YOUR_RAZORPAY_KEY_ID',
  key_secret: 'YOUR_RAZORPAY_KEY_SECRET',
});

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: 'INR',
    receipt: shortid.generate(),
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
