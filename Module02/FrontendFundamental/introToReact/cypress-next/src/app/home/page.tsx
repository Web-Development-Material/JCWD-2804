import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
   <main className='w-screen h-full flex justify-center items-center'>
    <h2 id='title-page'>Home Page</h2>
    <h2 id='sub-title-page'>Welcome to Home Page</h2>
    <Link href={'/about'}>Navigate to About</Link>
   </main>
  )
}

export default Home