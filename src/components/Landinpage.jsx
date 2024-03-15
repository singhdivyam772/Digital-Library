import React from 'react'
import NavBar from './NavBar'
import Loading from '../common/Loading'
import BooksCategory from './BooksCategory'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Landinpage = () => {

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
    <main>
   
    <div className='w-[screen] md:h-screen h-[50rem] flex md:justify-center items-center relative bg-[url(/assets/landingbackground.jpg)] overflow-hidden'>   
      <div className=' md:w-[80rem] md:h-full  flex md:justify-around justify-center items-center md:flex-nowrap flex-wrap'>
        <img
        className=' md:w-[30rem] w-[26rem] object-fill '
        src="/assets/wave-haikei (3).png"
        alt="" />

        <div className=' md:w-[40rem] md:px-0 px-3 text-center flex justify-center items-center md:h-[20rem] font-semibold text-slate-100  leading-7 tracking-wider text-2xl '>
          <p>
            Welcome to our digital library, where endless knowledge awaits. Explore our virtual shelves and embark on a journey of discovery.
            With just a click, unlock a world of learning and inspiration. Welcome to a new era of accessible knowledge.
          </p>
        </div>
      </div>
    </div>
    {
      isLoading 
        ? <Loading/> 
        : <BooksCategory books = {books}/>
      }
    </main>
  )
}

export default Landinpage
