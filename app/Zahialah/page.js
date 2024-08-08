"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Zahialah = () => {
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const orderData = {
            address,
            phone,
            email
        };

        try {
            await axios.post('http://localhost:3001/api/saveOrderData', orderData); // Үүнийг өөрийн серверийн URL-ээр сольж болно
            alert('Захиалга амжилттай илгээгдлээ!');
        } catch (error) {
            console.error('Захиалга илгээхэд алдаа гарлаа:', error);
            alert('Захиалга илгээхэд алдаа гарлаа.');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mt-24">
            <h2 className="text-2xl font-bold mb-4">Дэлгэрэнгүй хаяг</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Хаяг</label>
                <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg h-36 resize-none"
                    placeholder="Энд бичнэ үү"
                    required
                />
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Утас</label>
                <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Утас"
                    required
                />
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Имэйл</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Имэйл"
                    required
                />
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Илгээх
                </button>
            </form>
        </div>
    );
};

export default Zahialah;
