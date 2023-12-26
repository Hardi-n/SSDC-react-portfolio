import React from 'react'
import '../My Components/Home.css'
import img from '../My Components/homeprofilephoto.jpg'
export const Home = () => {
    return (
        <>
            <div className='parentcontainerhome'>
                <div className='container home'>
                    <img src={img} alt="adjdjkn" />
                    <b><h3>HELLO I'M <span>SUBHAGYA</span></h3></b>
                    <p>I study at sant longowal institute of engneering and technology and enjoys my life</p>
                    
                </div>
            </div>
        </>
    );
}
