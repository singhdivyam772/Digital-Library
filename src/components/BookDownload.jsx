import React from 'react';
import { useLocation } from 'react-router';
import BooksCategory from './BooksCategory';
const BookDownload = (props) => {
  const location = useLocation();
  const title = location?.state?.bookDetails?.title;
  const author = (location?.state?.bookDetails?.authors.map((data) => data?.name).length > 0)
  const image = location?.state?.bookDetails?.formats?.['image/jpeg']
  console.log(location)
  return (
    <main className='md:w-[screen] h-screen flex flex-wrap justify-evenly items-center mt-[6rem] bg-slate-800'>

      {/* left */}
      <section className='md:w-[26rem] md:h-[30rem] shadow-2xl flex justify-start items-center '>
        <img
          src={image}
          alt="Book Cover"
          loading='lazy'
          className='md:w-[30rem] md:h-[100%] object-fill'
        />
      </section>

      {/* right */}
      <section className=' md:w-[40%] md:h-[30rem] flex flex-col justify-start items-start gap-14 '>
        <p className=' font-bold md:text-[1.2rem] text-slate-100  tracking-wide uppercase'>
          {`${title}`}<br />
          {
            author
              ? <span className=' text-[1.2rem] underline flex justify-start text-red-500 leading-[3rem]'>by: {location?.state?.bookDetails?.authors.map((data) => data?.name)}
              </span>
              : ''
          }
        </p>

        <p className=' font-medium text-slate-100 md:text-[1.4rem] leading-10 tracking-wide'>
          {`
            ${location?.state?.bookDetails?.bookshelves?.map((data) => data.replace(' -- ', ' '))}
            ${location?.state?.bookDetails?.subjects?.map((data) => data.replace(' -- ', ' '))}
          `}
        </p>
        <div className='flex md:flex justify-start gap-10 md:w-full flex-wrap'>
          <a
            target='_blank'
            className='hover:scale-105 transition-all uppercase px-8 py-2 bg-blue-500 rounded-md font-semibold'
            href={location?.state?.bookDetails?.formats?.['text/html']}
            download={location?.state?.bookDetails?.title + ".html"} // Added download attribute
          >
            read
          </a>
          <button className=' hover:scale-105 transition-all uppercase px-8 py-2 bg-blue-500 rounded-md font-semibold'>
            download
          </button>
        </div>
      </section>
    </main>
  );
};

export default BookDownload;
