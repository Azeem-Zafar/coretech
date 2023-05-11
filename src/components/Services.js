import React from 'react'
import {FaCode} from 'react-icons/fa'

import './Services.css'
const Services = () => {
  return (
    <>
    
    
    <h1 className='aboutHead'>Core Tech Services</h1>
    <div className="container">
        <div class="row">
     
            <div class="col-lg-5  col-sm-12 web shadow-lg">
                <FaCode className = 'code'/>
                <h2>Web Development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam rerum recusandae minima praesentium ducimus excepturi nostrum voluptatibus quibusdam nihil odit, dicta sunt cumque perferendis sapiente nesciunt esse labore non, pariatur soluta laboriosam. Reiciendis voluptatum quia voluptas, veniam ipsam error cum alias maiores, architecto quisquam distinctio optio ut repudiandae provident ducimus.</p>
            </div>
           
            <div class="col-lg-2">

            </div>
            <div class="col-lg-5  col-sm-12 web shadow-lg">
                <FaCode className = 'code'/>
                <h2>Software Development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam rerum recusandae minima praesentium ducimus excepturi nostrum voluptatibus quibusdam nihil odit, dicta sunt cumque perferendis sapiente nesciunt esse labore non, pariatur soluta laboriosam. Reiciendis voluptatum quia voluptas, veniam ipsam error cum alias maiores, architecto quisquam distinctio optio ut repudiandae provident ducimus.</p>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Services