import React from 'react'
import './Review.css'
import CountUp from 'react-countup';

import { FaUser} from 'react-icons/fa'


const Review = () => {
  return (
    <>
      <div className="jump">
        <div className="jumbotron">
          <div className="container">
            <div className="row">


              <div className="col-lg-5 happyClient text-light text-center mt-5 p-3">
              <FaUser className = 'client'/>
                <h1>Our Happy Clients</h1>
              
                <h2> <CountUp end={60} duration={7} enableScrollSpy = {true}/><span> +</span></h2>
              
              </div>
              <div className='col-lg-2'></div>



              <div className="col-lg-5 happyClient text-light text-center mt-5 p-3">
              <FaUser className = 'client'/>
                <h1>Our Happy Clients</h1>
                <h2> <CountUp end={100} duration={5} /><span> +</span></h2>
               
              </div>

             





            </div>


          </div>
        </div>
      </div>
    </>
  );
}


export default Review