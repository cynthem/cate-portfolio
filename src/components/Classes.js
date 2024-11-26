import React from 'react';

export default function Classes() {
    return (
        <div className="classes">
            <h3 className='classes-header'>Group Classes</h3>
            <p className='classes-description'>Join me at Northwestern University for group classes at the Norris University Center! Lessons are open to the public.</p>
            <p className='classes-season'>**Fall schedule**</p>
            <div className='classes-list'>
                <div className='classes-bachata'>
                    <p className='classes-name'>Intro to Swing Dancing</p>
                    <p>Jan. 22 - Feb. 26</p>
                    <p>Wednesdays 6 - 6:50 pm</p>
                </div>
                <div className='classes-salsa'>
                    <p className='classes-name'>Intro to Bachata</p>
                    <p>Jan. 22 - Feb. 26</p>
                    <p>Wednesdays 7 - 7:50 pm</p>
                </div>
                <div className='classes-salsa'>
                    <p className='classes-name'>Intro to Salsa</p>
                    <p>Jan. 22 - Feb. 26</p>
                    <p>Wednesdays 8 - 8:50 pm</p>
                </div>
            </div>
            <p className='classes-link'>For more information, and to register, visit the 
                <a 
                    href="https://www.northwestern.edu/norris/arts-recreation/mini-courses/current-courses.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Norris University Center website
                </a>
                .
            </p>
        </div>
    );
}

/* CONTENT BELOW <h3>: 
            <p className='temp-content'>**Stay tuned for Fall 2024 class info!**</p>
*/