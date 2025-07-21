import React from 'react'
import Link from 'next/link'
const Secondblog = () => {
  return (
    <div>
        <h3>Read Second Blog</h3>
        <div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione porro labore, voluptatibus ad necessitatibus error commodi inventore voluptatem odio natus iusto ea ullam velit! Tempora consequatur temporibus, consequuntur doloremque cupiditate molestias minus quae molestiae, iste modi tenetur, eveniet corrupti veritatis quasi delectus quisquam dignissimos id omnis! Libero dolorem illo aliquid! </div>
         <Link href='/blogs'><button className='btn btn-dark mt-5'>Back</button></Link>
    </div>
  )
}

export default Secondblog