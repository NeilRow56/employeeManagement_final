import Link from 'next/link'
import React from 'react'

const UserHomePage = () => {
  return (
    <section className='container-mx-auto text-center py-10'>
        
        <h3 className='text-4xl font-bold'>Authorised User Homepage</h3>
        <div className='details'>
          <h5>Unknown</h5>
          <h5>Unknown</h5>
        </div>
        <div className='flex justify-center'>
          <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50' >Sign Out</button>
        </div>

        <div className='flex justify-center'>
            <Link href={'/profile'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50' >Profile Page</a></Link>
        </div>
    </section>
  )
}

export default UserHomePage