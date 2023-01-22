import React from 'react'
import Nav from '../Components/Nav'
import Image from 'next/image'
import avatar from "../public/Netflix-avatar.png"
import { useSelector } from 'react-redux';
import { selectUser } from '../Slices/userSlice';
import { auth } from './firebase';


function profile() {

const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreeen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <Image src={avatar} />
          <div className="profileScreen__details">
          <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button onClick={()=> auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default profile;