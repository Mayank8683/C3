import React from 'react';
import CustomerList from './components/CustomerList';
import OrderList from './components/OrderList';
import BookList from './components/BookList';
import ReviewList from './components/ReviewList';

function App() {
  return (
    <div className="App">
      <CustomerList />
      <OrderList />
      <BookList />
      <ReviewList />
    </div>
  );
}

export default App;
