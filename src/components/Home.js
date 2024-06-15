import React from 'react';
import ParticlesComponent from './ParticleConfig.js';

const Home = () => {
    return (
        <div>
            <section className='hero'>
                <ParticlesComponent />
                <div className='hero-content'>
                    <h1>GenAI co-pilots for Industrial Enterprises</h1>
                    <div className='hero-btn-grp'>
                        <button>Our Solutions</button>
                        <button>Get in touch</button>
                    </div>
                </div>
            </section>

            <section className='about-container'>
                <p>Generative AI <span>Co-pilots</span></p>
                <p>to assist Engineering, Maintenance</p>
                <p>& Production teams</p>
                <p><span>to Build fast, Troubleshoot faster</span></p>
                <p><span>& Produce more... </span></p>
            </section>
        </div>
    );
};

export default Home;
