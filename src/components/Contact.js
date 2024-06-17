import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='contact'>
        <h1>Request a demo</h1>
        <div className='contact-card'>
            <div className='contact-info'>
                  <input type='text' placeholder='Name'></input>
                  <input type='email' placeholder='Email'></input>
            </div>
            <textarea type='text' placeholder='Message'></textarea>
            <button type='submit'>Submit</button>
        </div>
      
    </section>
  )
}

export default Contact
