import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from '../common/Loading';
import { Link, useNavigate } from 'react-router-dom'

const BooksCategory = (props) => {
  const {books, isLoading} = props;
  const [allBooks, setAllBooks] = useState([]);
  const [nextPageLink, setNextPageLink] = useState('');
  const [prevPageLink, setPrevPageLink] = useState('');
  // const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const handleNavigate = (bookDetails) => {
    navigate('/download', { state: { bookDetails } });
    console.log(bookDetails)
  }
  useEffect(() => {
    setAllBooks(books);
  }, [books]);

  const changeToNext = async () => {
    setIsLoading(true)
    const nextValue = allBooks?.next;
    setNextPageLink(nextPageLink => [...nextPageLink, nextValue]);
    try {
      const response = await axios.get(nextValue)
      setAllBooks(response.data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const changeToPrev = async () => {
    setIsLoading(true)
    const prevValue = allBooks?.previous;
    setPrevPageLink(prevPageLink => [...prevPageLink, prevValue]);

    try {

      const response = await axios.get(prevValue)
      setAllBooks(response.data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }


  return (
    <main className=' flex w-[100vw] overflow-x-hidden justify-center flex-col  items-center min-h-[50vh]'>

      {isLoading
        ? <Loading />
        : <div className=' md:w-[100%] flex flex-wrap bg-slate-900 md:justify-start justify-center  items-center gap-7 py-4 px-2 '>
          {allBooks?.results?.map((booksDetails, index) => {
            return (
              <div
                onClick={() => handleNavigate(booksDetails)}
                className='md:w-[15rem] w-[18rem] md:px-5 py-3 text-center min-h-[24rem] flex flex-col justify-center items-center bg-white shadow-2xl rounded-xl
              transition-all cursor-pointer hover:scale-105 md:opacity-90 hover:opacity-100'
                key={booksDetails?.id}
              >
                <img
                  src={booksDetails?.formats?.['image/jpeg']}
                  alt="Book Cover"
                  className={`${isLoading ? 'hidden' : 'max-w-[15rem] max-h-[15rem] object-cover border-[0.1rem] rounded-lg border-blue-400'}`}
                />
                <p className='flex flex-col justify-center items py-2'>
                  {` ${booksDetails?.id} ${booksDetails?.title}`}
                </p>
              </div>
            );
          })}
        </div>}
      <div>
        <button
          onClick={changeToPrev}
          className={
            `${allBooks?.previous === null
              ? ' disabled: bg-slate-200 px-4 py-2 rounded-xl cursor-default '
              : 'bg-blue-600 px-4 py-2 rounded-xl'}`
          }>prev
        </button>
        <button
          onClick={changeToNext}
          className=' bg-blue-600 px-4 py-2 rounded-xl'>
          next
        </button>
      </div>
    </main>
  );
};

export default BooksCategory;
