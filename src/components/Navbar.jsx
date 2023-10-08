import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import '../index.css'
const Navbar = () => {
    const appName = "NoteApp";
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div class="bg-gray-100 p-3">
        <div class="w-full flex justify-between items-center mx-auto max-w-7xl text-white px-2 ">
            {!nav ? <h1 class="md:hidden text-3xl font-bold text-red-500">{appName}</h1> : null}
            <div class="hidden md:flex justify-between items-center h-10 w-full mx-auto">
                <h1 class="text-3xl font-bold text-red-500">{appName}</h1>
                <ul class="flex text-black"> 
                    <li class="p-4 text-red-300 hover:text-red-500 hover:cursor-pointer hover:opacity-80">Home</li>
                    <li class="p-4 text-red-300 hover:text-red-500 hover:cursor-pointer hover:opacity-80">Resources</li>
                    <li class="p-4 text-red-300 hover:text-red-500 hover:cursor-pointer hover:opacity-80">About</li>
                    <li class="p-4 text-red-300 hover:text-red-500 hover:cursor-pointer hover:opacity-80">Contact</li>
                </ul>
            </div>

            <div class=" w-full md:hidden">
                <button class="relative w-full ">
                    <div class="relative h-9 w-full">
                        <button onClick={handleNav} class="absolute  hover:cursor-pointer hover:opacity-70 top-0 right-0 h-10 w-10 text-red-300">
                            {nav ? <AiOutlineClose class="h-9 w-9" /> : <AiOutlineMenu class="h-9 w-9" />}
                        </button>
                    </div>

                </button>
                <div class={nav ? 'fixed left-0 top-0 w-3/5 border-r border-r-red-200  bg-red-100 h-full' : 'hidden'}>

                    <h1 class="text-3xl w-full font-bold text-red-500 my-3 mx-6">{appName}</h1>

                    <ul class="text-black pt-20 text-2xl p-4 uppercase">
                        <li class="p-4 border-b-2 border-white hover:border-black hover:opacity-60 hover:cursor-pointer animation-border">Home</li>
                        <li class="p-4 border-b-2 border-white hover:opacity-60 hover:cursor-pointer hover:border-black animation-border delay-1">Resources</li>
                        <li class="p-4 border-b-2 border-white hover:opacity-60 hover:cursor-pointer hover:border-black animation-border delay-2">About</li>
                        <li class="p-4 border-b-2 border-white hover:opacity-60 hover:cursor-pointer hover:border-black animation-border delay-3">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar