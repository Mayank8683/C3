import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            {review.comment} - Rating: {review.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
