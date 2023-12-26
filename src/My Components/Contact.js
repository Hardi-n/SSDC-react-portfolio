import React from 'react'
import '../My Components/Contact.css';
export const Contact = () => {
    return (
        <>
            <div className="container" id='contact'>

                <div className='bgimage'>
                    <div className='text-container'>
                        <div>
                            <p className='contacth'>CONTACT </p>
                        </div>
                        <div className="flexcontainer">
                            <div className='left-text-inputs'>
                                <div>
                                    <form action="">
                                        <input type="text" className='bgwhite' placeholder='NAME' />
                                        <input type="text" className='bgwhite' placeholder='EMAIL' />
                                        <input type="text" className='bgwhite' placeholder='PHONE' />
                                        <textarea name="message" placeholder='MESSAGE' className='bgwhite-text-area' cols="30" rows="8"></textarea>
                                        <center><button type='submit' className='submitbutton'>SUBMIT</button></center>
                                    </form>
                                </div>
                            </div>
                            <div className="right-text">
                                <div className='mt-1'>
                                    <i class="fas fa-map-marker-alt white"></i>
                                    <p className='white inline'>    -{'>'}   #33 block-D guru nanak colony sangur</p>
                                </div>
                                <div className='mt-1'>
                                    <i class="far fa-clock white"></i>
                                    <p className='white inline'>    -{'>'}   Mon-Fri 10am -5pm,sat 1pm-5pm</p>
                                </div>
                                <div className='mt-1'>
                                    <i class="fas fa-phone white"></i>
                                    <p className='white inline'>    -{'>'}   7658007883</p>
                                </div>
                                <div className='mt-1'>
                                    <i class="fas fa-envelope white"></i>
                                    <p className='white inline'>     -{'>'}   subhagya.chhabra@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
