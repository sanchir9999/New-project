// frontend/components/OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/order', { customerEmail: email }); // back-end API-ийн URL
            alert('Захиалга илгээгдлээ!');
        } catch (error) {
            console.error('Error sending order:', error);
            alert('Захиалга илгээхэд алдаа гарлаа.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Имэйл хаяг:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Захиалах</button>
        </form>
    );
};

export default OrderForm;
