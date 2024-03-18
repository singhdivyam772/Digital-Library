import React, { useEffect, useState } from 'react';

const data = () => {
  const [books, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let pageNumber = (Math.random() * 100).toFixed(0);
        setIsLoading(true);
        const bookLink = `https://gutendex.com/books/?page=${pageNumber}`;
        const response = await axios.get(bookLink);
        setBooks(response.data);
      } catch (error) {
        console.log('Error fetching books:', error);
        setBooks(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default data
