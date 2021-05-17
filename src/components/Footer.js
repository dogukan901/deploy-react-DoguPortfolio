import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-about">
                <p className="footer-about-heading">
                    Contact With Me To Get An Offer
                </p>
                <p className="footer-about-text">
                    You will receive an e-mail from me after you get in touch
                </p>
                <div className="input-areas">
                    <form >
                        <input type="email" name="email" placeholder="Your Email Here" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Me</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Me</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items ' >
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                        <Link class='one-link-omitted' to='/'>asaf</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <i className="fab fa-typo3" /> Dogukan Okcu
                        </Link>
                    </div>
                    <small className="website-rights">©2021 Dogukan Okcu <br />All Rights Reserved</small>
                    <div className="social-icons">
                        <a href="/" class='social-icon-link facebook' target='_blank' aria-label='Facebook'>
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.instagram.com/btt_do/" class='social-icon-link instagram' target='_blank' aria-label='Instagram'>
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCgrnkJYGUwDeGI_9ptHp6Iw" class='social-icon-link youtube' target='_blank' aria-label='Youtube'>
                            <i class='fab fa-youtube' />
                        </a>
                        <a href="https://twitter.com/Render4Me" class='social-icon-link twitter' target='_blank' aria-label='Twitter'>
                            <i class='fab fa-twitter' />
                        </a>
                        <a href="https://www.linkedin.com/in/doğukan-okçu-a76bb0110/" class='social-icon-link linkedin' target='_blank' aria-label='LinkedIn'>
                            <i class='fab fa-linkedin' />
                        </a>
                        <a href="https://github.com/dogukan901" class='social-icon-link github' target='_blank' aria-label='Github'>
                            <i class="fab fa-github" />
                        </a>
                        <a href="https://stackoverflow.com/users/14962648/render4me" class='social-icon-link stackoverflow' target='_blank' aria-label='stackoverflow'>
                            <i class="fab fa-stack-overflow" />
                        </a>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Footer
