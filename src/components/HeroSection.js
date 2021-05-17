import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ScrollspyNav from "react-scrollspy-nav";
import { init } from 'ityped'

function HeroSection() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,
            {
                showCursor: false, strings: ['A Full Stack Developer', 'A Part Time Software Eng.', 'And A Lifetime Learner'],
                backDelay: 1500,
            });
        console.log(textRef);
    }, [])

    return (
        < div className='hero-container' >
            <video src={require('../videos/video-1.mp4').default} autoPlay loop muted />
            < h1 > Hello There </h1>
            <p >I Am </p>
            <p >&nbsp;<span ref={textRef}> </span></p>

            <div className="hero-btns">

                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED!
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH MY INTRODUCE <i className='far fa-play-circle' />
                </Button>
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    activeNavClass="is-active"
                >
                    <a href="#cards">
                        <Button className='btns bounce sha' buttonStyle='btn--special'  >
                            <i class="fa fa-chevron-down fa-2x " />
                        </Button>
                    </a>
                </ScrollspyNav>

            </div>
        </div >
    )
}

export default HeroSection
