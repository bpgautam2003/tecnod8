import React from 'react'
import ad1 from '../images/ad1.png'
import ad2 from '../images/ad2.png'
import ad3 from '../images/ad3.png'
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import f4 from '../images/f4.png'
import f5 from '../images/f5.png'
import f6 from '../images/f6.png'

const Team = () => {
    return (
        <section id='team' className='team'>
            <h1>Advisors</h1>
            <div className='cards-container'>
                <div className="card-element">
                    <div className='card-img'><img src={ad1} alt='person' /></div>
                    <h3>Dr. Satvasheel Powar</h3>
                    <p>Startup Advisor</p>
                    <div className="card-content">
                        <h2>Dr. Satvasheel Powar</h2>
                        <h3>Startup Advisor</h3>

                        <p>Faculty In-charge IIT Mandi Catalyst <br />

                            SJVN Chair Associate Professor IIT Mandi

                            Entrepreneurship</p>

                        <a href="https://www.linkedin.com/in/satvasheel/" className="button">
                            Profile
                        </a>
                    </div>
                </div>
                <div className="card-element">
                    <div className='card-img'><img src={ad2} alt='person' /></div>
                    <h3>Air Vice Marshal
                        PKH Sinha VSM (retd)
                    </h3>
                    <p>Strategic Advisor</p>
                    <div className="card-content">
                        <h2>Air Vice Marshal
                            PKH Sinha VSM (retd)</h2>
                        <h3>Strategic Advisor</h3>
                        <p> Director IIT Mandi iHub & HCI Foundation <br />
                            Ex-Commandant Software Development Institute, Indian Air Force</p>
                        <a href="https://www.bharat-rakshak.com/IAF/Database/17118" className="button">
                            Profile
                        </a>
                    </div>
                </div>
                <div className="card-element">
                    <div className='card-img'><img src={ad3} alt='person' /></div>
                    <h3>Dr Aditya Nigam</h3>
                    <p>Artificial Intelligence Advisor</p>
                    <div className="card-content">
                        <h2>Dr Aditya Nigam</h2>
                        <h3>Artificial Intelligence Advisor</h3>
                        <p>Chairperson School of Computing & Electrical Engineering, IIT Mandi.<br />
                            Deep Learning Researcher</p>
                        <a href="#" className="button">
                            Profile
                        </a>
                    </div>
                </div>

            </div>
            <h1>Founding Team</h1>
            <div className='cards-container'>
                <div className="card-element">
                    <div className='card-img'><img src={f1} alt='person' /></div>
                    <h3>Ravinder Kumar</h3>
                    <p>Founder & CEO</p>
                    <div className="card-content">
                        <h2>Ravinder Kumar</h2>
                        <h3>Founder & CEO</h3>

                        <p>15 Years in Robotics & Automation Industry

                            Ex FANUC, Orangewood Labs (YC W18) <br />B Sc, MBA</p>

                        <a href="https://www.linkedin.com/in/ravinderks/" className="button">
                            Profile
                        </a>
                    </div>
                </div>
                <div className="card-element">
                    <div className='card-img'><img src={f2} alt='person' /></div>
                    <h3>Akshar Singh
                    </h3>
                    <p>Co-founder</p>
                    <div className="card-content">
                        <h2>Akshar Singh</h2>
                        <h3>Co-founder</h3>
                        <p>B.Tech Computer Science Engineering<br />TU Munich & IIT Mandi<br />
                            European ML Hackathon Winner</p>
                        <a href="#" className="button">
                            Profile
                        </a>
                    </div>
                </div>
                <div className="card-element">
                    <div className='card-img'><img src={f3} alt='person' /></div>
                    <h3>Naresh R</h3>
                    <p>LLM Lead</p>
                    <div className="card-content">
                        <h2>Naresh R</h2>
                        <h3>LLM Lead</h3>
                        <p>B.Tech Mechanical Engg + MBA (Dual Degree)<br />
                            IIT Madras</p>
                        <a href="#" className="button">
                            Profile
                        </a>
                    </div>
                </div>
                <div className="card-element">
                    <div className='card-img'><img src={f4} alt='person' /></div>
                    <h3>Niyati Madaan</h3>
                    <p>Product Development</p>
                    <div className="card-content">
                        <h2>Niyati Madaan</h2>
                        <h3>Product Development</h3>

                        <p>B Tech Mechanical Engg.<br />
                            IIT (ISM) Dhanbad</p>

                        <a href="#" className="button">
                            Profile
                        </a>
                    </div>
                </div>
                <div className="card-element">
                    <div className='card-img'><img src={f5} alt='person' /></div>
                    <h3>Harmanpreet Singh
                    </h3>
                    <p>DevOps</p>
                    <div className="card-content">
                        <h2>Harmanpreet Singh</h2>
                        <h3>DevOps</h3>
                        <p>B.Tech+ MTech Computer Science Engineering<br />
                            NIT hamirpur</p>
                        <a href="#" className="button">
                            Profile
                        </a>
                    </div>
                </div>
                <div className="card-element">
                    <div className='card-img'><img src={f6} alt='person' /></div>
                    <h3>Arpit Rathore</h3>
                    <p>GenAI Developer </p>
                    <div className="card-content">
                        <h2>Arpit Rathore</h2>
                        <h3>GenAI Developer </h3>
                        <p>B.Tech Mathematics & Computing <br />
                            IIT Delhi</p>
                        <a href="#" className="button">
                            Profile
                        </a>
                    </div>
                </div>

            </div>
            

        </section>
    )
}

export default Team
