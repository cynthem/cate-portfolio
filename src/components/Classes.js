import React from 'react';

export default function Classes() {
    return (
        <div className="classes">
            <h3 className='classes-header'>Group Classes</h3>
            <p className='classes-description'>Join me at Northwestern University for group classes at the Norris University Center! Lessons are open to the public.</p>
            <p className='classes-season'>**Spring schedule**</p>
            <div className='classes-list'>
                <div className='classes-bachata'>
                    <p className='classes-name'>Intro to Bachata</p>
                    <p>April 9 - May 21</p>
                    <p>Tuesday 6-6:50 pm</p>
                </div>
                <div className='classes-salsa'>
                    <p className='classes-name'>Intro to Salsa</p>
                    <p>April 9 - May 21</p>
                    <p>Tuesday 7-7:50 pm</p>
                </div>
                <div className='classes-swing'>
                    <p className='classes-name'>Intro to Swing</p>
                    <p>April 9 - May 21</p>
                    <p>Tuesday 8-8:50 pm</p>
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