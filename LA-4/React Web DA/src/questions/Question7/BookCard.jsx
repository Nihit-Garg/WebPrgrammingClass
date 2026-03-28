import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={`Cover for ${book.title}`} className="book-cover" />
      <div className="book-info">
        <h4 className="book-title">{book.title}</h4>
        <p className="book-author"><strong>Author:</strong> {book.authors}</p>
        <p className="book-details"><strong>Publisher:</strong> {book.publisher}</p>
        <p className="book-details"><strong>Year:</strong> {book.publishedYear}</p>
      </div>
    </div>
  );
};

export default BookCard;
