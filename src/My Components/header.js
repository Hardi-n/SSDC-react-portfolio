import React from 'react'
import './header.css'
export default function header() {
    return (
        <>
            <div className='container'>
                <div className='navbarfixed'>
                    <div className='navbar'>
                        {/* <img src="navbarlogo.webp" alt="" /> */}
                        <span>SUBHAGYA CHHABRA</span>
                        <div className='links'>
                            <a className='Home' href='#'>Home</a>
                            <a href='#about'>About</a>
                            <a href='#contact'>Contact</a>
                            <a href='#connect'>Connect</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
