export const fetchBooks = async (query) => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=12`);
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      return [];
    }
    
    return data.items.map(item => {
      const info = item.volumeInfo;
      return {
        id: item.id,
        title: info.title || "Unknown Title",
        authors: info.authors ? info.authors.join(', ') : "Unknown Author",
        coverImage: info.imageLinks?.thumbnail || "https://placehold.co/128x192?text=No+Cover",
        publisher: info.publisher || "Unknown Publisher",
        publishedYear: info.publishedDate ? info.publishedDate.substring(0, 4) : "N/A"
      };
    });
  } catch (error) {
    throw new Error('Failed to fetch books from Google Books API.');
  }
};
