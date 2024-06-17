import React, {useEffect} from 'react'
import d1 from '../images/d1.png'
import d2 from '../images/d2.png'
import d3 from '../images/d3.png'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Deliverables = () => {

    useEffect(() => {
        Aos.init();
    }, [])
  return (
      <section id="deliverables" className='deliverables'>
          <h1>Tecnod8 GenAI Co-pilot helps Engineering teams, to</h1>
          <div className='cards-container' >
              <div className="card-element" data-aos="fade-up" data-aos-duration="1500">
                <div className='card-img'>
                    <img src={d1} alt='d1'/>
                </div>
                <h3>Build fast</h3>
                <p>Just ask the co-pilot and get Technology based Idea for new use cases</p>
            </div>
              <div className="card-element" data-aos="fade-up" data-aos-duration="1500">
                  <div className='card-img'>
                      <img src={d2} alt='d2' />
                  </div>
                  <h3>Troubleshoot Faster</h3>
                  <p>Machine has stopped working? Just ask the co-pilot and get 'world class expert' answers </p>
              </div>
              <div className="card-element" data-aos="fade-up" data-aos-duration="1500">
                  <div className='card-img'>
                      <img src={d3} alt='d3' />
                  </div>
                  <h3>Produce More</h3>
                  <p>With full contextual understanding of the Machines & Tech your team achieves more </p>
              </div>
        </div>
    </section>
  )
}

export default Deliverables
