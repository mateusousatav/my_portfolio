"use client"

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
    const [toggled, setToggle] = useState(false);
    let classes = "";

    const handleNavToggle = () => {
        setToggle(!toggled);
    }

    if (toggled) {
        classes = "mobileMenu flex justify-between items-center px-4 absolute w-[100%] top-0 left-0 bg-blue-700 opacity-100 translate-y-0 max-h-40 transition-all duration-300 ease-in-out";
    } else {
        classes = "mobileMenu absolute w-[100%] opacity-0 -translate-y-5 max-h-0 pointer-events-none transition-all duration-300 ease-in-out";
    }

    return(
        <nav className="flex items-center justify-between px-2 py-5 font-montserrat">
            <div className={classes}>
                <ul>
                    <li className="text-sm text-gray-400 mt-2"><Link href="/">Home</Link></li>
                    <li className="text-sm text-gray-400 my-5"><Link href="/about_me">About Me</Link></li>
                    <li className="text-sm text-gray-400 mb-2"><Link href="/contact_me">Contact Me</Link></li>
                </ul>
                <p onClick={handleNavToggle}>X</p>
            </div>

            <p>M.S.</p>
            <Image onClick={handleNavToggle} className="burger cursor-pointer" src="/hamburger.svg" alt="menu" width={28} height={28} />
            
            <ul className="links flex gap-6">
                <li className="text-sm text-gray-400"><Link href="/">Home</Link></li>
                <li className="text-sm text-white">|</li>
                <li className="text-sm text-gray-400"><Link href="/about_me">About Me</Link></li>
                <li className="text-sm text-white">|</li>
                <li className="text-sm text-gray-400"><Link href="/contact_me">Contact Me</Link></li>
            </ul>
        </nav>
    )
}