import React from 'react'
import myCv from '/Nitesg-Gupta-Cv.pdf'

const About = () => {
    return (
        <>
            <section id='about'>
                <div className="padding-same">
                    <div className="about-us p-lg-4 p-2">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
                                    <div className='about-content'>
                                        <h3 className='heading-title'>About Me</h3>
                                        <p>I'm a Front End Developer with a passion for creating beautiful, responsive and functional websites. I love turning ideas into real products using modern technologies.</p>
                                        <div className='nav-btn pt-4'>
                                            <a href={myCv} download target='_blank'>Download CV &nbsp; <i className="fa-solid fa-download"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mt-3">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 border-end border-start">
                                            <div className='expre-card h-100 text-center'>
                                                <div className="icons"><i className="fa-solid fa-trophy"></i></div>
                                                <h2>3+</h2>
                                                <p>Year Exprience</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 border-end">
                                            <div className='expre-card h-100 text-center'>
                                                <div className="icons"><i className="fa-solid fa-computer"></i></div>
                                                <h2>100+</h2>
                                                <p>Projects Completed</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 border-end">
                                            <div className='expre-card h-100 text-center'>
                                                <div className="icons"><i className="fa-solid fa-users"></i></div>
                                                <h2>15+</h2>
                                                <p>Happy Clients Plus</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className='expre-card h-100 text-center'>
                                                <div className="icons"><i className="fa-solid fa-code"></i></div>
                                                <h2>1000+</h2>
                                                <p>Hours Code</p>
                                            </div>
                                        </div>
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

export default About