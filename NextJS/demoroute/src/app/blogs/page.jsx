import Link from 'next/link'
import React from 'react'

const Blogs = () => {
  return (
    <div className='text-center'>
        <h2>Blogs Page</h2>
        <div className='btn-group'>
            <Link href='/blogs/firstblog'><button className='btn btn-success'>FirstBlog</button></Link>
            <Link href='/blogs/secondblog'><button className='btn btn-danger'>SecondBlog</button></Link>
            <Link href='/blogs/thirdblog'><button className='btn btn-dark'>ThirdBlog</button></Link>
        </div>
        
    </div>
  )
}

export default Blogs