import React from 'react';
import { motion } from "framer-motion";
import { WindupChildren, Pace } from "windups";
import smile from '../assets/images/smile.png';
import yoga from '../assets/images/yoga.png';
import dip from '../assets/images/dip.png';
import salsa from '../assets/images/salsa.png';

export default function Header() {
    const animateImg = {
        rest: {
            scale: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.2,
            transition: { duration: 0.5 }
        }
    }
    
    return (
        <div className="header">
            <div className='heading'></div>
            <div className='images'></div>
        </div>
    );
}