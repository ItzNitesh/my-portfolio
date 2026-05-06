import React from 'react'
import developerImg from '/avatar-intro.png'
import myCv from '/Nitesg-Gupta-Cv.pdf'

const HeroSection = () => {
    return (
        <>
            <div className="hero-section pt-lg-5 pt-2">
                <div className="padding-same">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6 mt-3">
                                <div className='left-content-baner'>
                                    <p className='welocome'>Hi, I'm</p>
                                    <h1>Nitesh <span>Gupta</span></h1>
                                    <h2>Front End Developer | Responsive Web Creater</h2>
                                    <p className='para-banner'>I build responsive, user-friendly and modern websites with clean code and great user experience.</p>

                                    <div className="hire-btn-top">
                                        <a href={myCv} download target='_blank'>Hire Me &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                                        <a href="my-all-projects" className='my-work-btn'>View My Work &nbsp;&nbsp;<i className="fa-solid fa-eye"></i></a>
                                    </div>
                                    <p className='connect-text'>Connect With Me</p>
                                    <div className="banner-socail-media">
                                        <a href="https://github.com/ItzNitesh" target='_blank'><i className="fa-brands fa-github"></i></a>
                                        <a href="https://www.linkedin.com/in/nitesh-gupta-825543229/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="https://www.instagram.com/niteshgupta6342?igsh=cjNxdzBzeGQ0cjR6" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                                        <a href="https://github.com/ItzNitesh" target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 mt-3">
                                <div className='rigth-side-content'>
                                    <img src={developerImg} alt="" className='developer-img' />
                                    <p className='abs-text1'><i className="fa-solid fa-mobile-screen-button"></i> Responsive <br /> Design</p>
                                    <p className='abs-text2'><i className="fa-solid fa-bolt"></i> Fast <br /> Performance</p>
                                    <p className='abs-text3'> <i className="fa-solid fa-code"></i> Clean Code</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeroSection