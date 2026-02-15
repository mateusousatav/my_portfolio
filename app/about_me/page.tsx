import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-16 px-4 py-10 max-w-6xl mx-auto">

      <div className="md:w-1/2">
        <p className="heading2 text-center mb-6">About Me.</p>

        <p className="paragraph">
          I’m a full‑stack developer and web designer who loves building clean, functional digital experiences. 
          My work blends thoughtful UI design with solid engineering, and I enjoy creating projects that feel 
          intuitive, fast, and visually polished.
          <br /><br />
          My journey started early — I wrote my first lines of Java when I was about ten years old. Something 
          about building things from nothing and solving problems clicked instantly. That curiosity grew into a 
          passion, and over the years I’ve expanded into modern web development, design, and full‑stack engineering.
          <br /><br />
          Today, I work with tools like React, Next.js, Tailwind, Java, and SQL, and I’m constantly exploring new 
          frameworks and libraries to sharpen my craft. This portfolio itself is built with Next.js, and I’m always 
          experimenting with ways to make my work cleaner, smoother, and more expressive.
          <br /><br />
          Outside of coding and design, I’m someone who values balance and connection. I love the gym, I’m big into 
          video games, and I try to bring compassion and empathy into everything I do — whether I’m collaborating on 
          a project or helping someone learn something new.
          <br /><br />
          I’m always growing, always building, and always looking for the next challenge. If you’d like to connect, 
          collaborate, or just say hello, I’d love to hear from you.
        </p>
        <div className="mt-8 flex justify-center"> 
          <Link href="/contact_me" className="myButton text-[16px] px-8 py-3 w-70 text-center"> Contact Me! </Link> 
        </div>
      </div>

      <div className="md:w-1/2">
        <p className="heading2 text-center mb-6">Skills</p>

        <div className="space-y-8">

          <div>
            <p className="caption1 mb-2">Frontend Development</p>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">React</p>
                <p className="paragraph">I use React to build fast, interactive user interfaces with reusable components and clean state management.</p>
              </li>

              <li>
                <p className="font-semibold">Next.js</p>
                <p className="paragraph">I work with Next.js to create optimized, server‑rendered applications with smooth routing and strong performance.</p>
              </li>

              <li>
                <p className="font-semibold">Tailwind CSS</p>
                <p className="paragraph">I use Tailwind to design responsive, modern interfaces quickly while keeping my styling consistent and scalable.</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="caption1 mb-2">Backend Development</p>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">Java</p>
                <p className="paragraph">I write backend logic in Java to build reliable, structured systems that handle data processing and application logic.</p>
              </li>

              <li>
                <p className="font-semibold">SQL</p>
                <p className="paragraph">I use SQL to design, query, and manage databases that store and organize application data efficiently.</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="caption1 mb-2">Design & UI</p>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">Figma</p>
                <p className="paragraph">I use Figma to create wireframes, prototypes, and polished UI designs that guide the development process.</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="caption1 mb-2">Tools & Workflow</p>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">Git & GitHub</p>
                <p className="paragraph">I use Git and GitHub to manage version control, collaborate effectively, and keep my projects organized.</p>
              </li>

              <li>
                <p className="font-semibold">VS Code</p>
                <p className="paragraph">I work in VS Code to write, debug, and structure my code efficiently with a streamlined development setup.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
