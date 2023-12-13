import React from 'react';

export default function Classes() {
    return (
        <div className="classes">
            <h3 className='classes-header'>Group Classes</h3>
            <p className='classes-description'>Join me at Northwestern University for group classes at the Norris University Center! Lessons are open to the public and currently include:</p>
            <div className='classes-list'>
                <div className='classes-bachata'>
                    <p className='classes-name'>Intro to Bachata</p>
                    <p>January 17 - February 21</p>
                    <p>Wednesdays 6-7 pm</p>
                </div>
                <div className='classes-swing'>
                    <p className='classes-name'>Intro to Swing</p>
                    <p>January 17 - February 21</p>
                    <p>Wednesdays 7:15-8:15 pm</p>
                </div>
            </div>
            <p className='classes-link'>For more information, and to register, visit the 
                <a 
                    href="https://www.northwestern.edu/norris/arts-recreation/mini-courses/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Northwestern website
                </a>
                .
            </p>
        </div>
    );
}