"use client"
import Link from "next/link";
import { useState } from "react";
import { CiBoxList, CiCircleRemove, CiSearch } from "react-icons/ci";
import { LuClipboardPen, LuHouse, LuSquareUserRound } from "react-icons/lu";



function Header() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="h-12  bg-purple-600 text-white/85 border-b-2 border-orange-700 z-40 ">
            <div className="wraper flex gap-3 justify-between sm:justify-center md:justify-between ">
                <div className="left-div w-full md:w-2/3 lg:w-1/2 h-full flex justify-between sm:justify-center sm:gap-8 lg:gap-10 items-center">
                    <div className="logo text-xl uppercase flex justify-center items-center shadow-lg ">
                        <h1>level
                            <span className="text-purple-800 text-3xl font-semibold">up</span>
                            blogs
                        </h1>
                    </div>

                    <CiSearch
                        className=" text-3xl font-extrabold  text-purple-900 "
                    />
                </div>
                <nav className="flex justify-center items-center  md:w-1/3 lg:w-1/2 -order-1 md:order-1  ">
                    <ul className="md:flex gap-4 hidden text-nowrap ">
                        <li><Link href={`/`} className="capitalize font-medium  flex items-center"><LuHouse /> home</Link></li>
                        <li><Link target="_blank" href={`https://www.linkedin.com/in/shabbir-kalhoro-8528412b3/`} className="capitalize font-medium flex items-center "><LuSquareUserRound /> about</Link></li>
                        <li ><Link href={`/studio/intent/create/template=blog;type=blog/`} className="capitalize font-medium flex  items-center"><LuClipboardPen /> new blog</Link></li>
                    </ul>
                    <div className="md:hidden flex flex-col z-20 relative">
                        <button className="" onClick={() => setShowMenu(prev => !prev)}>
                            {
                                !showMenu ?
                                    <CiBoxList
                                        className="text-3xl  text-purple-900 font-bold border-purple-900 shadow-md border"
                                    />
                                    :
                                    <CiCircleRemove
                                        className="text-5xl  z-30  font-bold  shadow-sm  absolute top-16 "
                                    />
                            }
                        </button>
                        <ul className={`${showMenu ? "flex" : "hidden"} px-20 flex-col gap-3 rounded-lg text-white my-2  text-nowrap  shadow-xl opacity-95  bg-purple-500 absolute top-5 text-2xl`}>
                            <li><Link href={`/`} className="capitalize font-medium  flex items-center"><LuHouse /> home</Link></li>
                            <li><Link href={`/about`} className="capitalize font-medium flex items-center "><LuSquareUserRound /> about</Link></li>
                            <li ><Link href={`/studio/intent/create/template=blog;type=blog/`} className="capitalize font-medium flex  items-center"><LuClipboardPen /> create new blog</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
