import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-800 p-5">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <p className="heading1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Be You</p>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-2">
            <p className="caption1">Navigation</p>
            <ul className="underline decoration-blue-500">
              <li className="text-xs text-gray-400">
                <Link href="/">Home</Link>
              </li>
              <li className="my-2 text-xs text-gray-400">
                <Link href="/about_me">About Me</Link>
              </li>
              <li className="text-xs text-gray-400">
                <Link href="/contact_me">Contact Me</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="caption1">Social</p>
            <ul className="underline decoration-blue-500">
              <li className="text-xs text-gray-400"><Link href="https://github.com/mateusousatav" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
              <li className="my-2 text-xs text-gray-400"><Link href="https://www.instagram.com/m11_svt/" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
              <li className="text-xs text-gray-400"><Link href="https://www.figma.com/@m11_svt" target="_blank" rel="noopener noreferrer">Figma</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-around">
          <p className="text-xs text-gray-400">
            Built with NextJS & Tailwind CSS
          </p>
          <p className="text-xs text-gray-400 mt-5">
            © {new Date().getFullYear()} Mateus Sousa. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
