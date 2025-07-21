import React from 'react'
import Image from 'next/image'

const Notfound = () => {
  return (
    <div className='text-center'>
        <h1 className='mt-5'>Sorry, Page Not Found</h1>
        <h2>Error 404</h2>
        <Image src='/error404.gif' alt='Error 404 Page' width={1000} height={500}/>
    </div>
  )
}

export default Notfound