import Link from "next/link"

function Footer() {
  return (
    <div className="bg-purple-500/90 ">
      <footer className=" wraper flex justify-between  items-center  ">
        <div className="logo  text-xl uppercase flex justify-center items-center shadow-lg ">
          <h1>level
            <span className="text-purple-800 text-3xl font-semibold">up</span>
            blogs
          </h1>
        </div>
        <div className="flex flex-col  gap-x-8 justify-center items-center md:flex-row text-center">
          <p>&copy; 2025 Coding Blog</p>
          <p>Created by <Link target="_blank" href="https://www.linkedin.com/in/shabbir-shabbir-8528412b3/">GHULAM SHABBIR</Link></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
