import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import categoryData from '../data';
import axios from 'axios';

const NavBar = () => {
     // const [storeData, setStoreData] = useState();

     // useEffect(() => {
     //      const fetchData = axios.get('https://gutendex.com/books/')
     //           .then(response => {
     //                // Handle successful response
     //                console.log(response.data);
     //           })
     //           .catch(error => {
     //                // Handle error
     //                console.error('Error fetching data: ', error);
     //           });

     //           console.log(storeData);
     //      setStoreData(fetchData);
     // }, [])

     return (
          <main className=' fixed top-0 z-10 bottom-0  px-8 flex justify-between items-center w-screen shadow-2xl h-[5rem] bg-gradient-to-t from-purple-600 to-purple-400 overflow-x-hidden'>

               <div>
                    <p className=' text-xl font-bold '>Digital Library</p>
               </div>
               <div className=' relative w-[20rem] h-[2.4rem]'>
                    <IoSearch className=' text-blue-600 font-bold text-lg absolute top-[0.8rem] left-2 bottom-0 right-0'/>
               <input 
               type="text" 
               placeholder='search your book' 
               className='w-[100%] h-[2.4rem] border-2 pl-7 outline-blue-50 rounded-xl' />

               </div>
              
               <ul className=' flex justify-start items-center gap-3'>
                   { categoryData?.map((data)=>(
                    <li>{data?.categoryName}</li>

                   ))}
               </ul>
               <div className=' flex justify-center items-center gap-2'>
                    <button>SignUp</button>
                    <button>Login</button>
               </div>
          </main>
     )
}

export default NavBar
