import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import categoryData from '../data';
import axios from 'axios';
import { IoLibrary } from "react-icons/io5";
import Hamburger from './Hamburger';


const NavBar = () => {
    return (
        <main className='fixed top-0 z-10 bottom-0 px-8 flex justify-between items-center w-[100%] h-[20%] py-2 
        bg-gradient-to-t from-slate-100 to-slate-300 overflow-x-hidden'>

            {/* Digital Library section */}
            <div className='flex justify-center items-center gap-2'>
                <IoLibrary className='xl:text-2xl text-lg font-bold text-blue-600' />
                <p className='xl:text-xl text-sm font-bold text-slate-500'>Digital Library</p>
            </div>

            {/* Search input section */}
            <div className='relative xl:w-[20rem] md:w-[28rem] w-[10rem] h-[2.4rem]'>
                <IoSearch className='text-blue-600 font-bold text-lg absolute top-[0.7rem] left-2 bottom-0 right-0' />
                <input
                    type="text"
                    placeholder='search your book'
                    className='w-[100%] h-[2.4rem] border-2 pl-7 outline-blue-600 rounded-xl'
                />
            </div>

            {/* Category navigation section */}
            <ul className='xl:flex hidden mt-6 justify-start items-center '>
                {categoryData?.map((category) => (

                    <li key={category?.id} className='group cursor-pointer'>
                        <a className='  text-base text-slate-500 px-2 font-bold gap-1'>
                            {category?.categoryName}
                            <ul
                            >
                                {category?.subCategory?.map((subCategory) => (
                                    <li key={subCategory?.id}>
                                        <a className='absolute top-[5rem]  hidden group-hover:flex w-[100px] h-[200px] group-hover:z-50 -z-10
                                    bg-slate-50 justify-center items-center rounded-md shadow-xl pr-2 text-left'>
                                            {subCategory?.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </a>

                    </li>
                ))}
            </ul>

            {/* Sign up and Login buttons section */}
            <div className='md:flex hidden justify-center items-center gap-2'>
                <button className='px-2 py-1 bg-blue-500 rounded-lg font-semibold text-sm hover:bg-blue-600'>SignUp</button>
                <button className='px-2 py-1 bg-blue-500 rounded-lg font-semibold text-sm hover:bg-blue-600'>Login</button>
            </div>
            <Hamburger />
        </main>
    );
}


export default NavBar
