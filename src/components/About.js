import React from 'react'
import './About.css'

import { AnimationOnScroll } from 'react-animation-on-scroll';

export const About = () => {
  return (
    <div>
        <h1 className='aboutHead'>About Core Tech</h1>

<div className="container">
    <div className="row">
        <div className="col-lg-5">
          <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOut="animate__bounceOutRight">
            <h1><span className = 'coreTech'>Why </span>Core Tech ?</h1>
          </AnimationOnScroll>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit odit nobis? Totam ipsum a necessitatibus architecto officia atque repudiandae eligendi eos velit possimus soluta non earum voluptas eaque, illum ipsam cupiditate, perspiciatis ut facilis aut consequatur perferendis consequuntur eum sit! Sit magnam odit consequuntur omnis maiores natus possimus, libero ad odio doloremque. Possimus, iste eos quas neque mollitia modi impedit alias incidunt fugit vitae ipsum delectus beatae dolor cum necessitatibus corrupti debitis, voluptates quae sequi cumque quod reiciendis! Iste aperiam corrupti doloremque consequatur, voluptates nesciunt voluptate, aut adipisci dolorum vel numquam quia quas quibusdam est obcaecati eum nisi fugiat.</p>
        </div>
        <div className="col-lg-2">
        
      </div>
        <div className="col-lg-5">
         <img src="./images/success.jpg" alt="success" className = "img-fluid mt-3" />
      </div>
    </div>
</div>



    </div>
  )
}
