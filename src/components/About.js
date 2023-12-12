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
            about
        </div>
    );
}