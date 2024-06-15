import React from 'react'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p4.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'

const Products = () => {
  return (
    <section id="products" className='products'>
        <h1>Product features</h1>
          <div className='cards-container'>
              <div className="card-element">
                  <div className='card-img'>
                      <img src={p1} alt='p1' />
                  </div>
                  <h3>Intelligent Co-pilot</h3>
                  <p>Your "own" GenAI professional assistant</p>
              </div>
              <div className="card-element">
                  <div className='card-img'>
                      <img src={p2} alt='p2' />
                  </div>
                  <h3>Custom LLM</h3>
                  <p>Unlimited Insights of Industrial Technologies</p>
              </div>
              <div className="card-element">
                  <div className='card-img'>
                      <img src={p3} alt='p3' />
                  </div>
                  <h3>3D Simulation</h3>
                  <p>Not just text, see and relate to machine, Inside out</p>
              </div>
              <div className="card-element">
                  <div className='card-img'>
                      <img src={p4} alt='p4' />
                  </div>
                  <h3>Web Application</h3>
                  <p>To solve your problem when you face them</p>
              </div>
              <div className="card-element">
                  <div className='card-img'>
                      <img src={p5} alt='p5' />
                  </div>
                  <h3>Multi Language</h3>
                  <p>Language should not be a barrier in productivity</p>
              </div>
              <div className="card-element">
                  <div className='card-img'>
                      <img src={p6} alt='p6' />
                  </div>
                  <h3>Voice Interaction</h3>
                  <p>Need technical insight, just ask, naturally</p>
              </div>
          </div>

      
    </section>
  )
}

export default Products
