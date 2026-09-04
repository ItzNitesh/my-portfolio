import React from 'react'
import skillImg1 from '/skills-logo/html.png'
import skillImg2 from '/skills-logo/css.png'
import skillImg3 from '/skills-logo/bootstrap.png'
import skillImg4 from '/skills-logo/js.png'
import skillImg5 from '/skills-logo/react.png'
import skillImg6 from '/skills-logo/wp.png'
import dsingskillImg1 from '/skills-logo/tailwind.png'
import dsingskillImg2 from '/skills-logo/figma.png'
import dsingskillImg3 from '/skills-logo/sass.png'
import dsingskillImg4 from '/skills-logo/git.png'
import dsingskillImg5 from '/skills-logo/vs.png'
import dsingskillImg6 from '/skills-logo/photo.png'

const Skills = () => {
    return (
        <section id='myskills'>
            <div className="padding-same">
                <div className="skills-sec p-lg-4 p-2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 mt-3 border-end pe-5">
                                <div className='my-skills-card'>
                                    <h2 className="heading-title">My Skiils</h2>
                                    <div className='Fornd-end'>
                                        <h6>Frontend</h6>

                                        <div className="row justify-content-center">
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={skillImg1} alt="" width={"100%"} />
                                                <p>HTML 5</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={skillImg2} alt="" width={"100%"} />
                                                <p>CSS 3</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={skillImg3} alt="" width={"100%"} />
                                                <p>Bootstrap 5</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={skillImg6} alt="" width={"100%"} />
                                                <p>WordPress</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={skillImg4} alt="" width={"100%"} />
                                                <p>Java Script</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={skillImg5} alt="" width={"100%"} />
                                                <p>React Js</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='Fornd-end mt-5'>
                                        <h6>Styling & Tools</h6>

                                        <div className="row justify-content-center">
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={dsingskillImg1} alt="" width={"100%"} />
                                                <p>Tailwind Css</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={dsingskillImg2} alt="" width={"100%"} />
                                                <p>Figma</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={dsingskillImg3} alt="" width={"100%"} />
                                                <p>Sass Css</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={dsingskillImg6} alt="" width={"100%"} />
                                                <p>Photo Shop</p>
                                            </div>

                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={dsingskillImg4} alt="" width={"100%"} />
                                                <p>Git</p>
                                            </div>
                                            <div className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3'>
                                                <img src={dsingskillImg5} alt="" width={"100%"} />
                                                <p>VS Code</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='skill-progress-bar-sec'>
                                        <div className="skill-bar">
                                            <div className="skill-top">
                                                <span>HTML / CSS</span>
                                                <span>95%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress"></div>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="skill-top">
                                                <span>JavaScript</span>
                                                <span>80%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress1"></div>
                                            </div>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="skill-top">
                                                <span>React Js</span>
                                                <span>75%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress2"></div>
                                            </div>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="skill-top">
                                                <span>Tailwind Css</span>
                                                <span>85%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress3"></div>
                                            </div>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="skill-top">
                                                <span>UI/UX Desing</span>
                                                <span>65%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress4"></div>
                                            </div>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="skill-top">
                                                <span>WordPress</span>
                                                <span>80%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress5"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 mt-3">
                                <h2 className="heading-title" style={{marginLeft  :"40px"}}>Experience</h2>
                                <div className="timeline">

                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <div className="top">
                                                <h3>Frontend Developer</h3>
                                                <span>Feb 2025 - PRESENT</span>
                                            </div>
                                            <h4>GTF Technologies</h4>
                                            <ul>
                                                <li>Developed responsive and interactive user interfaces using Html, Css, React, javascript and Tailwind CSS.</li>
                                                <li>Collaborated with designers and backend developers to deliver high-quality web applications.</li>
                                                <li>Optimized websites for performance, SEO and accessibility.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <div className="top">
                                                <h3>Front End Developer (Web Designer)</h3>
                                                <span>June 2024 Feb 2025</span>
                                            </div>
                                            <h4>Maxtra Technologies</h4>
                                            <ul>
                                                <li>Built and maintained multiple client websites using HTML, CSS, JavaScript and React.</li>
                                                <li>Converted Figma designs into pixel-perfect, responsive UIs.</li>
                                                <li>Improved website performance and fixed cross-browser issues.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <div className="top">
                                                <h3>Front End Developer (Web Designer)</h3>
                                                <span>Nov 2022 June 2024</span>
                                            </div>
                                            <h4>Radiumbox Phil Technology (p) Ltd</h4>
                                            <ul>
                                                <li>Supported the development of responsive web interfaces and reusable UI components.</li>
                                                <li>Gained hands-on experience with modern frontend technologies and industry best practices.</li>
                                                <li>Contributed to real-world projects, enhancing problem-solving and coding efficiency.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <div className="top">
                                                <h3>Web Developer Intern</h3>
                                                <span>April 2022 - July 2022</span>
                                            </div>
                                            <h4>Webtechage Solution</h4>
                                            <ul>
                                                <li>Assisted in building responsive web pages and components.</li>
                                                <li>Learned and implemented modern frontend tools and best practices.</li>
                                                <li>Worked on real-time projects and improved coding skills.</li>
                                            </ul>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills