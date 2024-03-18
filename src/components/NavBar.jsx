import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import categoryData from '../data';
import axios from 'axios';
import { IoLibrary } from "react-icons/io5";
import Hamburger from './Hamburger';
import {Link} from 'react-router-dom'

const NavBar = ({fetchData}) => {
    const refetchHandler = ()=>{
        fetchData();
    }
    return (
        <main className='fixed top-0 z-10 bottom-0 px-8 flex justify-between items-center w-[100%] h-[15%] py-2 
        bg-slate-900 overflow-x-hidden'>

            {/* Digital Library section */}
            <Link to='/' className='flex justify-center items-center gap-2' onClick={refetchHandler}>
                <IoLibrary className='xl:text-2xl text-lg font-bold text-blue-600' />
                <p className='xl:text-xl text-sm font-bold text-blue-500'>Digital Library</p>
            </Link>

            {/* Sign up and Login buttons section */}
            <div className='md:flex hidden justify-center items-center gap-2'>
                <button className='px-2 py-1 bg-blue-500 rounded-lg text-white font-semibold text-sm hover:bg-blue-600'>SignUp</button>
                <button className='px-2 py-1 bg-blue-500 rounded-lg text-white font-semibold text-sm hover:bg-blue-600'>Login</button>
            </div>
            <Hamburger />
        </main>
    );
}


export default NavBar
