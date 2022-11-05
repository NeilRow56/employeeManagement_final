import React, { useState} from 'react'
import GuestComponent from '../components/GuestComponent'
import UserHomePage from '../components/UserHomePage'


const HomePageScreen = () => {

    const [session, setSession] = useState(false)
  return (
    <section className='container mx-auto '>
        {session ?
    <UserHomePage />
            :
    
    <GuestComponent />
        }
    </section>
  )
}

export default HomePageScreen