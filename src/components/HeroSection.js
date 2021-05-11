import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={require('../videos/video-1.mp4').default} autoPlay loop muted />
            < h1 > Hello There</h1>
            <p>I'M A FULL STACK WEB AND MOBİLE DEV. STUDENT </p>
            <p>AND A PART TIME SOFTWARE ENG.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED!
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH MY INTRODUCE <i className='far fa-play-circle' />                </Button>
            </div>
        </div>
    )
}

export default HeroSection
