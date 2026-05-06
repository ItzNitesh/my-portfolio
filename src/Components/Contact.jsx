import React from 'react'

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <div className="padding-same">
          <div className="contact-sec p-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-4 mt-3">
                  <div className='contact-details'>
                    <h3 className='heading-title'>LET'S WORK TOGETHER</h3>
                    <p>Have a project in mind or just want to say hi?
                      Feel free to reach out. I'll get back to you as soon as possible!</p>

                    <div className='contact-link'>
                      <a href="#"><i className="fa-solid fa-envelope"></i> niteshgupta5900@gmail.com</a>
                      <a href="#"><i className="fa-solid fa-phone-volume"></i> +91 9599 503 094</a>
                      <a href="#"><i className="fa-solid fa-location-crosshairs"></i> I-30/B Krishan Vihar Delhi</a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8">
                  <div className="contact-form">
                    <form action="mailto:niteshgupta5900@gmail.com" method="POST" encType="text/plain">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className='input-group'>
                            <input type="text" name="name" id="name" placeholder='Your Name' required />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className='input-group'>
                            <input type="email" name="email" id="email" placeholder='Your Emial Id' required />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className='input-group'>
                            <input type="text" name="subject" id="subject" placeholder='Subject' required />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className='input-group'>
                            <textarea name="message" id="message" placeholder='Drop Message' required></textarea>
                          </div>
                        </div>

                        <div className="col-xl-3">
                          <button type='submit'>Send Message &nbsp; <i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact