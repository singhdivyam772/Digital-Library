import './App.css'
import NavBar from './components/NavBar'
import Landinpage from './components/Landinpage'
import BooksCategory from './components/BooksCategory'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Audio } from 'react-loader-spinner';

function App() {
  const [books, setBooks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gutendex.com/books/');
        setBooks(response.data);
      } catch (error) {
        console.log('Error fetching books:', error);
      }
    };
    fetchData();
  }, [])
  // console.log(books)
  
  return (
    <div className=''>
      <NavBar />
      <Landinpage />
      <BooksCategory books = {books}/>
    </div>
  )
}

export default App
