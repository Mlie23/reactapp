import React from 'react'

const Error = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600">404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Whoops! Something's missing.</p>
                <p class="mb-4 text-lg font-semibold text-gray-500">Sorry, the page you're looking for doesn't exist.</p>
                <a href="/" class="inline-flex text-white bg-red-500 hover:border-2 hover:border-red-500 hover:bg-white hover:text-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
            </div>   
        </div>
    </section>
  )
}

export default Error