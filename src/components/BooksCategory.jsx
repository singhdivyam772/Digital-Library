import axios from 'axios';
import React, { useState, useEffect } from 'react';

const BooksCategory = (props) => {
  const [allBooks, setAllBooks] = useState([]);
  const [nextPageLink, setNextPageLink] = useState('');
  const [prevPageLink, setPrevPageLink] = useState('');


  useEffect(() => {
    // Update state with props data when props change
    setAllBooks(props.books);
    // console.log('total book is 2283')

  }, [props.books]);

  const changeToNext = async () => {
    const nextValue = allBooks?.next;
    setNextPageLink(nextPageLink => [...nextPageLink, nextValue]);
    try {
      const response = await axios.get(nextValue)
      setAllBooks(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const changeToPrev = async () => {
    const prevValue = allBooks?.previous;
    setPrevPageLink(prevPageLink => [...prevPageLink, prevValue]);

    try {
      const response = await axios.get(prevValue)
      setAllBooks(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(nextPageLink);
  // console.log(prevPageLink);
  return (
    <main className=' flex w-screen justify-center flex-col  items-center min-h-[50vh]'>

      <div className=' md:w-screen flex flex-wrap bg-slate-200 justify-start items-center gap-4 mt-2 py-2 px-[3rem]'>
      {allBooks?.results?.map((booksDetails, index) => {
        return (
          <div className=' md:w-[15rem] px-5 py-3 text-center min-h-[24rem] flex flex-col justify-center items-center bg-white shadow-2xl rounded-xl' key={booksDetails?.id}>
            <img 
              src={booksDetails?.formats?.['image/jpeg']} 
              alt="Book Cover"
              loading='lazy'
              className=' max-w-[15rem] max-h-[15rem] object-cover border-[1rem] rounded-lg border-blue-400 ' 
              />
            <p className=' flex flex-col justify-center items'>
                <span className=' font-extrabold'>
                  Title
                </span>{` ${booksDetails?.id} ${booksDetails?.title}`}</p>
            <p className=' flex flex-col justify-center items'>
                <span className=' font-extrabold'>
                  Summary
                </span>
                {` 
                ${booksDetails?.bookshelves.length > 1 
                  ? booksDetails?.bookshelves 
                  : booksDetails?.subjects}`
                }
                </p>
          </div>
        );
      })}
      </div>
      
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
