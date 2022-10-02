import React from 'react'
import './Header.css';
// import "ReactComponent as none" from './none';
import none from './none.png';

function Header() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6'>
                <h5>SUMMER 2020</h5>
                <h1 id='headline-6'>NEW COLLECTION</h1>
                <h4>We know how large objects will act, 
                    but things on a small scale.
                </h4>
                <div className='cta'>
                    <button>
                        <h3>SHOP NOW</h3>
                    </button>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='hero-cover-1'>
                    <div className='none'>
                        <img src={none} alt='image'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header