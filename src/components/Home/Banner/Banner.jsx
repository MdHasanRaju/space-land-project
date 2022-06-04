import React from 'react';
import {  useNavigate } from 'react-router-dom';
import LottieBanner from '../../Shared/LottieAnimation/LottieBanner';
import './Banner.css';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='banner-color'>
            <div className="container">
           <div className="row g-2">
               <div className="col-lg-6 d-flex text-start align-items-center">
                   <div>
                       <h1>Let's go to Mars and</h1>
                       <h1> dominate the land of Mars</h1>
                       <p  className='mt-4 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, at nobis? Inventore in sint modi unde sit hic ad asperiores vitae, saepe natus atque dignissimos doloremque consequuntur, mollitia minima sed.</p>
                       <button onClick={() => navigate('/characters')} className='btn btn-outline-light'>
                           GO TO MARS
                       </button>
                   </div>
               </div>
               <div className="col-lg-6">
                   <div>
                   <LottieBanner/>
                   </div>
               </div>
           </div>
           </div>
        </div>
    );
};

export default Banner;