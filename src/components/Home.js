import React from 'react';
import ParticlesComponent from './ParticleConfig.js';
import { motion } from 'framer-motion';

const Home = () => {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3
            }
        }
    };

    const lineVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

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
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <motion.p variants={lineVariants}>Generative AI <span>Co-pilots</span></motion.p>
                    <motion.p variants={lineVariants}>to assist Engineering, Maintenance</motion.p>
                    <motion.p variants={lineVariants}>& Production teams</motion.p>
                    <motion.p variants={lineVariants}><span>to Build fast, Troubleshoot faster</span></motion.p>
                    <motion.p variants={lineVariants}><span>& Produce more... </span></motion.p>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
