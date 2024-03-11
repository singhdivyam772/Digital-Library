import './App.css'
import NavBar from './components/NavBar'
import Landinpage from './components/Landinpage'
import BooksCategory from './components/BooksCategory'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Audio } from 'react-loader-spinner';
import Loading from './common/Loading'


function App() {
  const [books, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://gutendex.com/books/');
        setBooks(response.data);
      } catch (error) {
        console.log('Error fetching books:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  
  
  return (
    <div className=''>
      <NavBar />
      <Landinpage />
      {
        isLoading 
          ? <Loading/> 
          : <BooksCategory books = {books}/>
      }
    </div>
  )
}

export default App
