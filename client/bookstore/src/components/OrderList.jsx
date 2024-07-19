import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id} - Total Amount: {order.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
