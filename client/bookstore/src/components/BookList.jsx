import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
