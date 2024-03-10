import axios from 'axios';
import React, { useState, useEffect } from 'react';

const BooksCategory = (props) => {
  const [allBooks, setAllBooks] = useState([]);
  const [nextPageLink, setNextPageLink] = useState('');

  useEffect(() => {
    // Update state with props data when props change
    setAllBooks(props.books);
    console.log('total book is 2283')

  }, [props.books]);

  const changeToNext = async () => {
    const nextValue = allBooks?.next;
    setNextPageLink(nextValue);
    try {
      console.log(`from button: ${nextValue}`)

      const response = await axios.get(nextPageLink)
      setAllBooks(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  const changeToPrev = async () => {

    const nextValue = allBooks?.previous;
    setNextPageLink(nextValue);
    try {
      console.log(`from button: ${nextValue}`)

      const response = await axios.get(nextPageLink)
      setAllBooks(response.data)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className=' flex w-[80vw] justify-around flex-wrap items-center min-h-[50vh]'>
      {allBooks?.results?.map((booksDetails, index) => {
        return (
          <div className='flex flex-col justify-center items-center  ' key={booksDetails?.id}>
            <img src={booksDetails?.formats?.['image/jpeg']} alt="Book Cover" />
            <p>{` ${index + 1} ${booksDetails?.title}`}</p>
          </div>
        );
      })}
      <button

        onClick={changeToPrev}
        className={`${allBooks?.previous === null ? ' disabled: bg-slate-200 px-4 py-2 rounded-xl cursor-default ' : 'bg-blue-600 px-4 py-2 rounded-xl'}`}>prev
      </button>
      <button
        onClick={changeToNext}
        className=' bg-blue-600 px-4 py-2 rounded-xl'>next</button>
    </div>

  );
};

export default BooksCategory;
