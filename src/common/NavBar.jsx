import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import categoryData from '../data';
import axios from 'axios';

const NavBar = () => {
     const [storeData, setStoreData] = useState();

     useEffect(() => {
          const fetchData = axios.get('https://gutendex.com/books/')
               .then(response => {
                    // Handle successful response
                    console.log(response.data);
               })
               .catch(error => {
                    // Handle error
                    console.error('Error fetching data: ', error);
               });

               console.log(storeData);
          setStoreData(fetchData);
     }, [])
     return (
          <main className=' mt-1'>
               <nav className=' w-[100vw] h-[22vh] flex flex-col '>
                    {/* 1st row */}
                    <div className=' w-[100vw] h-[8vh] flex justify-between'>
                         {/* input */}
                         <div className=' w-[50%] h-[100%] flex justify-around items-center'>
                              <div className=' max-w-[100px]'>
                                   <button className=' font-bold w-28 '>Digital Library</button>
                              </div>
                              <div className=' w-[60%] h-[90%]  relative'>
                                   <input type="text" className=' w-full h-[100%] pl-9 pr-2 border-2 outline-none border-slate-400 text-red-800/90 font-normal rounded-lg ' />
                                   <IoSearch className=' absolute top-[0.3rem] left-[1rem] text-xl text-slate-400 ' />
                              </div>
                         </div>

                         {/* login/signup */}
                         <div className=' w-[50%] h-[100%] flex justify-end items-center'>
                              <div className=' flex justify-center items-center mr-5 gap-4'>
                                   <button className=' bg-red-500 text-white px-4 py-1 rounded-md'>Signup</button>
                                   <button className=' bg-red-500 text-white px-4 py-1 rounded-md'>Login</button>
                              </div>
                         </div>
                    </div>
                    {/* 2nd row */}
                    <div className=' w-[100vw] h-[28vh] flex justify-center items-start'>
                         <div className=' flex gap-5'>
                              {categoryData?.map((data) => (
                                   <ul key={data?.id} className='group cursor-pointer transition-all hover:text-red-400'>
                                        <li className='  '>{data?.categoryName}</li>
                                        <li>
                                             {data?.subCategory?.map((data) => (
                                                  <ul key={data?.id} className=' hidden group-hover:flex'>
                                                       <li>
                                                            {data?.name}
                                                       </li>
                                                  </ul>
                                             ))}
                                        </li>
                                   </ul>
                              ))}
                         </div>
                    </div>
               </nav>
               <div className=' bg-red-400 w-[100vw] h-24'>
                    {storeData?.results?.map((data) => {

                         <ul key={data.id}>
                              <li>{data.title}</li>
                         </ul>

                    })}
               </div>

          </main>
     )
}

export default NavBar
