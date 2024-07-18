import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
   <main className='w-screen h-full flex justify-center items-center'>
    <h2>About Page</h2>
    <Link href={'/home'}>Navigate to Home</Link>
   </main>
  )
}

export default About