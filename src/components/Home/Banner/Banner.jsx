import React from 'react';
import LottieBanner from '../../Shared/LottieAnimation/LottieBanner';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-color m'>
           <div className="row g-2">
               <div className="col-lg-6 px-5 mt-4 d-flex text-start align-items-center">
                   <div>
                       <h1>Let's go to Mars and</h1>
                       <h1> dominate the land of Mars</h1>
                       <p  className='mt-4 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, at nobis? Inventore in sint modi unde sit hic ad asperiores vitae, saepe natus atque dignissimos doloremque consequuntur, mollitia minima sed.</p>
                       <button className='btn btn-outline-light'>
                           GO TO MARS
                       </button>
                   </div>
               </div>
               <div className="col-lg-6 mt-2">
                   <div>
                   <LottieBanner/>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Banner;