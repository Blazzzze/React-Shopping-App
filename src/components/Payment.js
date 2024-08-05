import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    const orderUrl = 'http://localhost:5000/create-order';
    const { data } = await axios.post(orderUrl, { amount });

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: data.amount,
      currency: data.currency,
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://your-logo-url.com',
      order_id: data.id,
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Razorpay Signature: ${response.razorpay_signature}`);
      },
      prefill: {
        name: 'Your Name',
        email: 'your-email@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Your Address',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Pay with Razorpay</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
