import React from 'react';
import Header from './components/Header';
import Classes from './components/Classes';
import Lessons from './components/Lessons';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className="home">
            <Header />
            <div className='middle'>
                <div className='offerings'>
                    <Lessons />
                    <Classes />
                </div>
                <About />
            </div>
            <Footer />
        </div>
    );
}