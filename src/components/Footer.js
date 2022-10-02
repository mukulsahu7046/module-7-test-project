import React, { useState } from 'react'
import './Footer.css';
import fb from './fb.png';
import insta from './insta.png';
import tweet from './tweet.png';

function Footer() {
    const [email,setEmail] = useState();

    function emailFunc(e)
    {
        setEmail(e.target.value);
    }
    
    function postDataFunc(e)
    {
        e.preventDefault();

        fetch('https://module7-test-email-storing-api-default-rtdb.asia-southeast1.firebasedatabase.app/email.json',
            {
                method:'POST',
                headers : {'content-type':'application/json'},
                body: JSON.stringify(
                    {
                        email: email
                    })
            }
            )
    }

    return (
    <div className='desktop-footer-6'>
        <div className='div1'>
            <div className='container1'>
                <div className='row1'>
                    <div className='col-md-7'>
                        <h6>Made With ❤️ at Acciojob</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='div2'>
            <div className='container2'>
                <div className='row2'>
                    <div className='col-md-21'>
                        <h5 className='h51'>Company Info</h5>
                        <div className='after-h51'>
                            <a href='#' className='h51-a1'>About Us</a>
                            <a href='#' className='h51-a2'>Carrier</a>
                            <a href='#' className='h51-a3'>We are hiring</a>
                            <a href='#' className='h51-a4'>Blog</a>
                        </div>
                    </div>
                    <div className='col-md-22'>
                        <h5 className='h52'>Legal</h5>
                            <div className='after-h52'>
                                <a href='#' className='h52-a1'>About Us</a>
                                <a href='#' className='h52-a2'>Carrier</a>
                                <a href='#' className='h52-a3'>We are hiring</a>
                                <a href='#' className='h52-a4'>Blog</a>
                            </div>
                    </div>
                    <div className='col-md-23'>
                        <h5 className='h53'>Features</h5>
                            <div className='after-h53'>
                                <a href='#' className='h53-a1'>Business Marketing</a>
                                <a href='#' className='h53-a2'>User Analytic</a>
                                <a href='#' className='h53-a3'>Live Chat</a>
                                <a href='#' className='h53-a4'>Unlimited Support</a>
                            </div>
                    </div>
                    <div className='col-md-24'>
                        <h5 className='h54'>Resources</h5>
                            <div className='after-h54'>
                                <a href='#' className='h54-a1'>IOS & Android</a>
                                <a href='#' className='h54-a2'>Watch a Demo</a>
                                <a href='#' className='h54-a3'>Customers</a>
                                <a href='#' className='h54-a4'>API</a>
                            </div>
                    </div>
                    <div className='col-md-4'>
                        <h5 className='h5-email'>Get In Touch</h5>
                        <div className='custom-form-group-subscribe'>
                            <p className='form-text'>Lorem impsum dolor amit</p>
                            <form className='input-group' onSubmit={postDataFunc}>
                                <div className='input-group-append'>
                                    <button type='submit' className='btn'>
                                        <p className='input-group-text'>Subscribe</p>
                                    </button>
                                </div>
                                <input type="email" onChange={emailFunc} className='form-control-input-style-1' placeholder='Your Email' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className='div3'>
            <div className='container3'>
                <div className='row3'>
                    <div className='col-md-31'>
                        <div className='navbar-brand'>
                            <h3 className='footer-brand-h3'>Acciojob</h3>
                        </div>
                    </div>
                    <div className='col-md-32'>
                        <div className='social-media'>
                            <div className='facebook'>
                                <div className='ant-design-facebook-filled'>
                                    <img className='fb' src={fb} alt="fb"/>
                                </div>
                            </div>
                            <div className='instagram'>
                                <div className='ant-design-instagram-outlined'>
                                    <img className='insta' src={insta} alt="insta"/>
                                </div>
                            </div>
                            <div className='twitter'>
                                <div className='ant-design-twitter-outlined'>
                                    <img className='tweet' src={tweet} alt="tweet"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer