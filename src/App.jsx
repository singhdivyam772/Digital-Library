import React, { useState, useEffect } from 'react';
import './App.css';
import BookDownload from './components/BookDownload';
import Landinpage from './components/Landinpage';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { IoSearch } from 'react-icons/io5';
import Loading from './common/Loading';
import { useNavigate } from 'react-router-dom'
function App() {
  const [books, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (bookDetails) => {
    console.log('Navigating to:', bookDetails);
    navigate('/download', { state: { bookDetails } });
    setIsDropdownVisible(false)
  };  

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const bookLink = 'https://gutendex.com/books';
      const response = await axios.get(bookLink);
      setBooks(response.data);
    } catch (error) {
      console.log('Error fetching books:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchTerm !== '') {
        const filteredBooks = books.results.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setBooks({...books, results: filteredBooks });
        console.log(filteredBooks)
      }
    }, 2000);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, books]);

  const titleChangeHandler = (e) => {
    const changeValue = e.target.value.trim()
    if(changeValue.length > 0){
    setIsDropdownVisible(true);
    setSearchTerm(changeValue);
  }else{
    setIsDropdownVisible(false);
    setSearchTerm('');
  }
  };
  console.log(books)
 console.log(searchTerm)

  
  return (
    <div className=' relative'>
     <div className="fixed w-80 md:w-96 top-7 left-[15rem] z-50">
  <IoSearch className="text-blue-600 font-bold text-lg absolute top-2 left-2" />
  <input
    type="text"
    name="searchBar"
    onKeyUp={titleChangeHandler}
    placeholder="Search your book"
    className="w-72 h-10 pl-7 outline-blue-600 transition-all focus:w-96 rounded-xl"
    

  />
    <div className={`
    ${isDropdownVisible ? 
    'block' : 'hidden'} fixed z-200 left-[15rem] max-h-60 w-96 top-20 text-sm rounded-md bg-white text-black overflow-y-auto shadow-lg`}>
    {books?.results?.map((data, index) => (
    <p
        className="cursor-pointer hover:bg-slate-400 p-2"
        onClick={() => handleNavigate(data)}
        key={index}
    >
        {index + 1}. {data.title}
    </p>
))}

    </div>
</div>

        
      <NavBar fetchData={fetchData} />
      <Routes>
        <Route
          path='/'
          element={<Landinpage books={books} isLoading={isLoading} />}
        />
        <Route path='/download' element={<BookDownload />} />
      </Routes>
    </div>
  );
}

export default App;
