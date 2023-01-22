import React, { useEffect, useState } from 'react'
import avatar from "../public/Netflix-avatar.png"
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BellIcon, SearchIcon } from '@heroicons/react/solid'

function Nav() {

    const [show, handelShow] = useState(false);
    const router = useRouter();
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
    const links = [
        { name: "Home", url: "/" },
        { name: "TV Shows", url: "/tvshows" },
        { name: "Movies", url: "/movies" },
        { name: "My List", url: "/mylist" },
    ]

    return (


        <div className={` nav ${show && "nav__black"}`}>


            <div className='nav_contents flex items-center space-x-2 md:space-x-32'>

                <img
                    onClick={() => router.push('/')}
                    className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt="NutFlix Image"
                />

                <ul className="hidden cursor-pointer space-x-4 text-white md:flex items-center ">
                    {links.map(({ name, url }) => {
                        return (
                            <li key={name}>
                                <Link href={url}>
                                    {name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <SearchIcon className="fixed mb-4 mx-20 cursor-pointer text-white h-6 w-8 right-5   sm:inline" />
                    <BellIcon className='fixed cursor-pointer text-white h-6 w-8 '/>
                </div>
                <div className='nav_avatar'>
                    <Image src={avatar} onClick={() => router.push('/profile')} />
                </div>

            </div>


        </div>
    )
}

export default Nav