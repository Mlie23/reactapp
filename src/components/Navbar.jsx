import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import '../index.css'
const Navbar = () => {
    const appName = "QuizWiz";
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div class="flex justify-between items-center mx-auto max-w-7xl text-white px-2">
            <div class="hidden md:flex justify-between items-center h-10 w-full mx-auto">
                <h1 class="text-3xl font-bold text-red-500">{appName}</h1>
                <ul class="flex text-black">
                    <li class="p-2 border-2 rounded-md border-white hover:border-red-600 hover:bg-red-600 hover:text-white hover:font-semibold hover:cursor-pointer">
                        <a href="/">Home</a>
                    </li>
                    <li class="p-2 border-2 rounded-md border-white hover:border-red-600 hover:bg-red-600 hover:text-white hover:font-semibold hover:cursor-pointer">
                        <a href="#">Resources</a>
                    </li>
                    <li class="p-2 border-2 rounded-md border-white hover:border-red-600 hover:bg-red-600 hover:text-white hover:font-semibold hover:cursor-pointer">
                        <a href="#">About</a>
                    </li>
                    <li class="p-2 border-2 rounded-md border-white hover:border-red-600 hover:bg-red-600 hover:text-white hover:font-semibold hover:cursor-pointer">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            
            <div class="w-full md:hidden">
            <div onClick={handleNav} class="w-full hover:cursor-pointer hover:opacity-70">
                    {nav ? <AiOutlineClose  class=" right-2 m-2 w-8 h-8 text-red-300"/> : <AiOutlineMenu  class=" right-2 m-2 w-8 h-8 text-red-300"/>}
                </div>
                <div class={nav?'fixed left-0 top-0 w-3/5 border-r border-r-red-200  bg-red-100 h-full': 'hidden'}>

                    <h1 class="text-3xl w-full font-bold text-red-500 m-4">{appName}</h1>

                    <ul class="text-black pt-20 text-2xl p-4 uppercase">
                        <li class="p-4 border-b-2 border-white hover:border-black hover:opacity-60 hover:cursor-pointer animation-border">
                            <a href="/">Home</a>
                        </li>
                        <li class="p-4 border-b-2 border-white hover:opacity-60 hover:cursor-pointer hover:border-black animation-border delay-1">
                            <a href="#">Resources</a>
                        </li>
                        <li class="p-4 border-b-2 border-white hover:opacity-60 hover:cursor-pointer hover:border-black animation-border delay-2">
                            <a href="#">About</a>
                        </li>
                        <li class="p-4 border-b-2 border-white hover:opacity-60 hover:cursor-pointer hover:border-black animation-border delay-3">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar