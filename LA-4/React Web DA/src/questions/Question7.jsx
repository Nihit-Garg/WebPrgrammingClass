import React, { useState } from 'react';
import Header from './Question7/Header';
import Search from './Question7/Search';
import BookList from './Question7/BookList';
import { fetchBooks } from './Question7/bookUtils';
import './Question7/Question7.css';

const Question7 = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchBooks(query);
      setBooks(results);
    } catch (err) {
      setError(err.message || 'Error fetching books.');
      setBooks(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-app-container">
      <div className="book-app-wrapper">
        <h3 className="student-info">Nihit Garg - 24BCE0627</h3>
        <Header />
        <Search onSearch={handleSearch} />
        <BookList books={books} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Question7;
