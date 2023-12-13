import React from 'react';
import { motion } from 'framer-motion';
import insta from '../assets/images/instagram.png';

export default function About() {
    const animateIcon = {
        rest: {
            scale: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.2,
            transition: { duration: 0.5 }
        },
        tap: {
            scale: 0.9
        }
    }

    return (
        <div className="about">
            <h3 className='about-header'>About</h3>
            <div className='about-contact'>
                <p className='about-email'>Email<motion.a
                        href='mailto:cate.gc@gmail.com'
                        whileHover={{ color: '#5dd597' }}
                    >
                        cate.gc@gmail.com
                    </motion.a> to schedule a lesson.
                </p>
                <motion.a
                    href='https://www.instagram.com/cateloose'
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={animateIcon}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    animate="rest"
                >
                    <img 
                        alt='Instagram icon'
                        src={insta}
                    />
                </motion.a>
            </div>
            <div className='about-credentials'>
                <p className='about-credentials-description'>As a life-long dancer, some of my experience includes:</p>
                <ul className='about-credentials-list'>
                    <li>15+ years of ballet & jazz</li>
                    <li>Social dancing since 2005</li>
                    <li>Yoga certified</li>
                    <li>3 years of burlesque</li>
                    <li>2 years of belly dance</li>
                    <li>5+ years powerlifting</li>
                    <li>2 years distance running</li>
                </ul>
            </div>
            <p className='about-sendoff'>Don't hesitate to reach out if I can answer any questions or help you with your dancing goals!</p>
        </div>
    );
}