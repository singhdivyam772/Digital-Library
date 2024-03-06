import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import categoryData from '../data';
import axios from 'axios';
import { IoLibrary } from "react-icons/io5";


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
          <main className=' fixed top-0 z-10 bottom-0  px-8 flex justify-between items-center w-screen  h-[5rem] bg-gradient-to-t from-slate-100 to-slate-300 overflow-x-hidden'>

               <div className=' flex  justify-center items-center gap-2  '>
                    <IoLibrary className=' xl:text-2xl text-lg font-bold text-blue-600' />
                    <p className=' xl:text-xl text-sm font-bold text-slate-500 '>Digital Library</p>
               </div>
               <div className=' relative xl:w-[20rem] md:w-[28rem] w-[10rem] h-[2.4rem]'>
                    <IoSearch className=' text-blue-600 font-bold text-lg absolute top-[0.7rem] left-2 bottom-0 right-0'/>
               <input 
               type="text" 
               placeholder='search your book' 
               className='w-[100%] h-[2.4rem] border-2 pl-7 outline-blue-50 rounded-xl' />

               </div>
              
               <ul className=' xl:flex hidden justify-start items-center text-base text-slate-500 font-bold gap-3'>
                   { categoryData?.map((data)=>(
                    <li>{data?.categoryName}</li>
                   ))}
               </ul>
               <div className=' md:flex hidden justify-center items-center gap-2'>
                    <button className=' px-2 py-1 bg-blue-500 rounded-lg font-semibold text-sm '>SignUp</button>
                    <button className=' px-2 py-1 bg-blue-500 rounded-lg font-semibold text-sm '>Login</button>
               </div>
               <div className=' md:hidden flex flex-col  gap-1'>
                    <div className=' w-9 h-1 bg-slate-900'></div>
                    <div className=' w-9 h-1 bg-slate-900'></div>
                    <div className=' w-9 h-1 bg-slate-900'></div>
               </div>
          </main>
     )
}

export default NavBar
