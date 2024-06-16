import React, { useState, useEffect } from 'react';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import insta from '../images/insta.png'
import linkedin from '../images/linkedin.png'
import yt from '../images/yt.png'

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const showTime = currentTime.getHours()
        + ':' + String(currentTime.getMinutes()).padStart(2, '0')
        + ":" + String(currentTime.getSeconds()).padStart(2, '0');

    return (
        <section id="footer" className='footer'>
            <div className='footer-container'>
                <div className='footer-content'>
                    <p> <span>© Tecnod8 2024</span><br />
                        mail@nebula.com<br />
                        founders@tecnod8.com<br />
                        +91 73038 07779<br />
                        IIT Mandi Catalyst, North Campus, IIT Mandi<br />
                        Local time: <span>{showTime}</span></p>
                </div>
                <div className='social-links'>
                    <a href='https://www.linkedin.com/company/tecnod8/' target='_blank' rel="noopener noreferrer">
                        <img src={linkedin} alt='fb' />
                    </a>
                    <a href='https://twitter.com/Tecnod8' target='_blank' rel="noopener noreferrer">
                        <img src={twitter} alt='twitter' />
                    </a>
                    <a href='https://www.youtube.com/@Tecnod8' target='_blank' rel="noopener noreferrer">
                        <img src={yt} alt='fb' />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=61557531326364' target='_blank' rel="noopener noreferrer">
                        <img src={fb} alt='fb' />
                    </a>
                    <a href='https://www.instagram.com/tecnod8.ai/' target='_blank' rel="noopener noreferrer">
                        <img src={insta} alt='fb' />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Footer;
