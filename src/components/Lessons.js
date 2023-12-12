import React from 'react';

export default function Lessons() {
    return (
        <div className="lessons">
            <h3 classname="lessons-header">Private Lessons</h3>
            <p classname='lessons-intro'>I offer private lessons that are tailored to your needs, whether that is learning a new style, improving your current skills, or preparing for a special event. I'm also happy to recommend styles if you don't have a particular dance in mind.</p>
            <p className='lessons-list'>Many styles to choose from:</p>
            <ul>
                <li>Salsa</li>
                <li>Tango</li>
                <li>Bachata</li>
                <li>Merengue</li>
                <li>Swing</li>
                <li>Polka</li>
                <li>Waltz</li>
                <li>General partner work</li>
                <li>Yoga (virtual only)</li>
            </ul>
            <p className='lessons-price'>20 minute consultations via Zoom are complimentary and an opportunity to discuss your goals and assess your current skill level. The hourly rate for private lessons is $60, and they can take place virtually via Zoom, or at an agreed upon location.</p>
        </div>
    );
}