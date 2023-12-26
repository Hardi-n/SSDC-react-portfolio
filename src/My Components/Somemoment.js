import React from 'react'
import '../My Components/Somemoments.css'
import img1 from '../My Components/images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.JPEG'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
export const Somemoment = () => {
    return (
        <>
            <div className='maincontainer'>
                <h2>SOME MOMENTS</h2>
                <div className='photoscontainer'>
                    <div className='flexphotoscontainer'>
                        <div className='photo'>
                            <img src={img1} alt="photo not loaded" />
                        </div>
                        <div className='photo'>
                            <img src={img2} alt="photo not loaded" />
                        </div>
                        <div className='photo'>
                            <img src={img3} alt="photo not loaded" />
                        </div>
                        <div className='photo'>
                            <img src={img4} alt="photo not loaded" />
                        </div>
                        <div className='photo'>
                            <img src={img5} alt="photo not loaded" />
                        </div>
                    </div>
                    <div className='flexphotoscontainer'>
                        <div className='photo'>
                            <img src={img6} alt="photo not loaded" />
                        </div>
                        <div className='photo'>
                            <img src={img7} alt="photo not loaded" />
                        </div>
                        <div className='photo'>
                            <img src={img8} alt="photo not loaded" />
                        </div>
                        <div className='photo'>
                            <img src={img9} alt="photo not loaded" />
                        </div>
                        <div className='photo'>
                            <img src={img10} alt="photo not loaded" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
