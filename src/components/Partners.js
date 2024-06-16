import React from 'react'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import s5 from '../images/s5.png'
import s6 from '../images/s6.png'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'

const Partners = () => {
  return (
      <section id="partners" className='partners'>
          <h1>Partners</h1>
          <div className='partners-container'>
              <div className='partner-logos'>
                  <img src={s1} alt="s1" />
                  <img src={s2} alt="s2" />
                  <img src={s3} alt="s3" />
                  <img src={s4} alt="s4" />
                  <img src={s5} alt="s5" />
                  <img src={s6} alt="s6" />
                  <img src={s1} alt="s1" />
                  <img src={s2} alt="s2" />
                  <img src={s3} alt="s3" />
                  <img src={s4} alt="s4" />
                  <img src={s5} alt="s5" />
                  <img src={s6} alt="s6" />
              </div>
          </div>
          <h1>Highlights</h1>
          <div className='certificate-cards-container'>
              <div className='certificate-card-element'>
                <img src={c1} alt='c1'/>
                <div className='certificate-body'>
                      <h3>Tecnod8 in Elite 40</h3>
                      <p>We were recognised among Elite 40 by Venture Capital platform Inflection Point Ventures</p>
                </div>
              </div>
              <div className='certificate-card-element'>
                  <img src={c2} alt='c1' />
                  <div className='certificate-body'>
                      <h3>Demo to Governor of Himachal</h3>
                      <p>showcasing our Innovative Generative AI platform to Governor of Himachal Pradesh</p>
                  </div>
              </div>
              <div className='certificate-card-element'>
                  <img src={c3} alt='c1' />
                  <div className='certificate-body'>
                      <h3>Startup Mahakumbh</h3>
                      <p>Founder representing Tecnod8 @ Startup Mahakumbh at Himachal State Pavilion</p>
                  </div>
              </div>
              <div className='certificate-card-element'>
                  <img src={c4} alt='c1' />
                  <div className='certificate-body'>
                      <h3>Participated in G20 S20 </h3>
                      <p>Tecnod8 was selected to showcase our Innovative platform during G20 S20 meet at IIT Mandi</p>
                  </div>
              </div>
              
          </div>
      </section>
  )
}

export default Partners
