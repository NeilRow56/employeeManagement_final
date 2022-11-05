import Link from 'next/link'
import React from 'react'

const GuestComponent = () => {
  return (
    <section className='container-mx-auto text-center py-10'>
        
        <h3 className='text-4xl font-bold'>Guest Homepage</h3>
        <div className='flex justify-center'>
            <Link href={'/login'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50' >Login</a></Link>
        </div>
    </section>
    
  )
}

export default GuestComponent
