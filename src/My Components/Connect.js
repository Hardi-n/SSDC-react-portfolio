import React from 'react'
import '../My Components/Connect.css'
import facebook from '../My Components/images/facebooklogo.png'
import instagram from '../My Components/images/instagram-logo.png'
import twitter from './images/twitterlogo.png'
import linkedin from './images/linkedinlogo.png'
export const Connect = () => {
    return (
        <>
            <div className="connect-container" id='connect'>
                <div className='text-center-connect'>
                    <b> <p className='ml-10'>CONNECT</p> </b>
                </div>
                <div className="flex-connect text-center-connect">
                    <div className="logos">
                        <a href="https://www.facebook.com/profile.php?id=100083658461825" target='_blank'><img src={facebook} className='h-100' alt="logo not loaded" /></a>
                        <p>FACEBOOK</p>
                    </div>
                    <div className="logos">
                        <a href="https://www.instagram.com/itz_subhagya_7?igsh=ODA1NTc5OTg5Nw==" target='_blank'><img src={instagram} className='h-100' alt="" /></a>
                        <p>INSTAGRAM</p>
                    </div>
                    <div className="logos">
                        <a href="https://x.com/Hardin_02?t=k4Wufc3N7REwo4YWdGvjjA&s=08" target='_blank'><img src={twitter} className='h-100' alt="" /></a>
                        <p>TWITTER</p>
                    </div>
                    <div className="logos">
                        <a href="https://www.linkedin.com/in/subhagya-2b89b8222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src={linkedin} className='h-100' alt="" /></a>
                        <p>LINKEDIN</p>
                    </div>
                </div>
            </div>
        </>
    )
}
