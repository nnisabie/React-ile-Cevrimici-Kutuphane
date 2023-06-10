import React from 'react';

const Book = ({ title, author }) => {
  return (
    <div>
      <h3 style={{color:"brown", fontFamily:"sans-serif"}}>{title}</h3>
      <p style={{fontFamily:'sans-serif'}}>{author}</p>
    </div>
  );
}

export default Book;
