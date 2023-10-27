'use client'

import logo from '../Images/logo.png';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart,FaUserCircle,FaSearch } from 'react-icons/fa';

const Header = () => {
    const navigation = [
        {
            _id : 1,
            title : "Home",
            href :'/',
        },
        {
            _id : 2,
            title : "Phone",
            href :'/phone',
        },
        {
            _id : 3,
            title : "Phone Case",
            href :'/phonecase',
        },
        {
            _id : 4,
            title : "Accessories",
            href :'/accessories',
        },
        {
            _id : 5,
            title : "Watches",
            href :'/watches',
        },
        {
            _id : 6,
            title : "Source",
            href :'/help',
        },
    ]
  return (
    <div className='sticky top-0 z-20'>
        <div className='w-full h-20 flex items-center justify-between bg-white border-b-[2px] border-black '>
            {/* logo */}
                <div className='mx-10'>
                    <Link href={'/'}>

                           <Image src={logo} alt='logo' className='w-32 h-16'/>
                    </Link>
                </div>
            {/* navbar */}
            <div className=''>
                    <ol className="max-w-screen-xl mx-auto h-full flex items-center justify-center gap-8">
                        {navigation.map((item) => (
                        <Link key={item._id} href={item.href}>
                            <li className="font-semibold hover:text-yellow-200 duration-200">
                            {item.title}
                            </li>
                        </Link>
                        ))}
                    </ol>
            </div>
             
            {/* searchbar */}
            <div className='w-[400px] relative'>
                <input 
                    type='text'
                    placeholder='Search your items...'
                    className='w-full h-10 focus-visible:outline-red-600 rounded-full px-4 border-[1px] border-black'
                    >
                </input>
               <FaSearch className='absolute right-2 top-3 cursor-pointer '/>
            </div>
            {/* log in */}
            <div className='flex items-center justify-center'>
                <div className='text-4xl border border-black rounded-full px-1 py-1'>
                    <FaUserCircle/>
                </div>
                <div className='flex flex-col items-center justify-center px-3 '>
                    <p className='text-gray-500'>Hello,sign In</p>
                    <p className='font-bold'>Your Account</p>
                </div>
            </div>
            {/* cart */}
            <div className='mx-10 text-3xl cursor-pointer '>
                            <FaShoppingCart/>
                        
            </div>
        </div>
    </div>
  )
}

export default Header