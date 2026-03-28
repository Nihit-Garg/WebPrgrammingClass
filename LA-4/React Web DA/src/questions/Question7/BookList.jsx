import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, loading, error }) => {
  if (loading) return <div className="book-loading">Finding the best matches...</div>;
  if (error) return <div className="book-error">{error}</div>;
  if (!books) return <div className="book-empty">Search for a book to explore!</div>;
  if (books.length === 0) return <div className="book-empty">No books found for this search. Try different keywords.</div>;

  return (
    <div className="book-grid">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
