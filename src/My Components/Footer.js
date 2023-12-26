import React from 'react'
import './Footer.css'
export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className='wd-80'>
                        <div className="flex-footer">
                            <div className="address">
                                <b><p>ADDRESS</p></b>
                                <p>#33 Block-d guru nanak colony. <br />sangrur,punjab <br />148001</p>
                            </div>
                            <div className="knowledge">
                                <b><p>KNOWLEDGE</p></b>
                                <p>html <br />css <br />javascript <br />php <br />c <br />c++ <br />java <br />python</p>
                            </div>
                            <div className="contact-us">
                               <b><p>CONTACT US</p></b>
                                <p>+91 7658007883 <br />subhagya.chhabra@gmail.com</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex-footer">
                            <div className='copywrite'>
                                <p>© 2019 subhagya chhabra.All Rights Reserved</p>
                            </div>
                            <div>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
