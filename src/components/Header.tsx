import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hamburger from '../assets/Hamburger.svg'

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const buttonStyle = 'text-gray-100 font-bold text-m py-2 px-4 border-2 border-gray-100 hover:bg-black hover:text-gray-50 rounded-lg'
    const BUTTONS = (
        <>
            <button className={buttonStyle} onClick={() => { navigate('/about') }}>About Me</button>
            <button className={buttonStyle} onClick={() => { navigate('/projects') }}>Projects</button>
            <button className={buttonStyle} onClick={() => { navigate('/experience') }}>Experience</button>
            <button className={buttonStyle} onClick={() => { navigate('/contact') }}>Contact</button>
        </>
    )

    return (
        <div className="relative w-full">
            <nav className="fixed -inset-1.5 h-24 bg-gradient-to-r from-blue-800 via-red-500 to-yellow-600 opacity-75 blur-lg"></nav>
            <nav className='bg-gradient-to-r from-blue-800 via-red-500 to-yellow-600 text-white fixed w-full h-20'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='flex items-center justify-between h-20'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <button onClick={() => { navigate('/') }} type='button'>
                                <div className='text-2xl font-bold py-2'>
                                    BRIAN LIM
                                </div>
                            </button>
                            <div className='hidden md:block'>
                                <div className='flex ml-10 items-baseline space-x-2'>
                                    {BUTTONS}
                                </div>
                            </div>
                        </div>
                        <div className='md:hidden'>
                            <button onClick={() => setSidebarOpen(!sidebarOpen)} type='button' className='fill-gray-110'>
                                <img src={Hamburger} width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {sidebarOpen && (
                    <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
                        {BUTTONS}
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Header