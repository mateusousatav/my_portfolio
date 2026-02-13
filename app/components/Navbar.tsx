import Link from 'next/link'

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between px-2 py-5 font-montserrat">
            <p>M.S.</p>
            <ul className="flex gap-6">
            <li className=""><Link href="/">Home</Link></li>
            <li>|</li>
            <li className=""><Link href="/about_me">About Me</Link></li>
            <li>|</li>
            <li><Link href="/contact_me">Contact Me</Link></li>
            </ul>
        </nav>
    )
}