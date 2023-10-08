import React from 'react'
import Typed from 'react-typed';
const Landing = () => {
  return (
    <div class=" h-full w-full flex-col justify-center mx-auto text-center flex  ">
      <div class="sm:mx-auto sm:w-full sm:max-w-7xl px-4 md:px-0">
        <div class="text-3xl text-red-300">
          This is a start of a great project
        </div>
        <h2 class="text-red-300 lg:text-7xl md:text-6xl text-5xl md:py-2 lg:py-6">Make Learning
          <Typed class="md:text-5-xl sm:text-3xl text-xl font-semibold"
            strings={[' Easy', ' Fast', ' Free!!! :)']}
            typeSpeed={100}
            backSpeed={115}
            loop /></h2>
        <button
          type="submit"
          class="place-items-center justify-center mt-3 px-6 py-2.5 text-black hover:font-medium text-lg bg-red-100 hover:underline leading-tight rounded shadow-md hover:bg-red-200 hover:shadow-lg active:bg-red-300 active:shadow-lg"
        >
          Start Here
        </button>
        <p>
          Already a user?  
          <span class=" ">
            <button class="hover:underline hover:font-semibold text-md hover:cursor-pointer"> sign in here </button></span>
        </p>
        <div class="pt-24">

        </div>
      </div>
    </div>

  )
}

export default Landing