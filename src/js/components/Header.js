import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between h-16 text-center text-stone-100 bg-emerald-400' >
        <a href='#' className='font-bold text-4xl basis-1/4 py-3 cursor-pointer'>Wasim</a>
        <nav className='basis-1/4 h-full' >
            <ul className='flex justify-between text-2xl h-full' >
                <li className='px-4 cursor-pointer h-full w-full hover:bg-green-600 flex flex-col justify-center' ><span>Home</span></li>
                <li className='px-4 cursor-pointer h-full w-full hover:bg-green-600 flex flex-col justify-center'><span>About</span></li>
                <li className='px-4 cursor-pointer h-full w-full hover:bg-green-600 flex flex-col justify-center'><span>Projects</span></li>
                <li className='px-4 cursor-pointer h-full w-full hover:bg-green-600 flex flex-col justify-center'><span>Contact</span></li>
            </ul>
        </nav>
        <div className='basis-1/4 text-2xl py-3 cursor-pointer' >Theme Btn</div>
    </header>
  )
}

export default Header