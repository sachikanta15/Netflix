import React, { useEffect, useState } from 'react'
import avatar from "../public/Netflix-avatar.png"
import Image from 'next/image'

function Nav() {

    const [show, handelShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handelShow(true);
        }
        else {
            handelShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])


    return (


        <div className={` nav ${show && "nav__black"}`}>


            <div className='nav_contents'>



                <img className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt="NutFlix Image"
                />
                <div className='nav_avatar'>
                    <Image src={avatar} />
                </div>

            </div>


        </div>
    )
}

export default Nav