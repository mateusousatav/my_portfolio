export default function Navbar() {
    return(
        <div className="flex items-center justify-between px-2 py-5 font-montserrat">
            <p>M.S.</p>
            <ul className="flex gap-6">
            <li className="">About Me</li>
            <li>|</li>
            <li>Contact Me</li>
            </ul>
        </div>
    )
}