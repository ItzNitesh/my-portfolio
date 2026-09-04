import React from 'react'
import siteLogo from '/main-logo.png'
import myCv from '/Nitesh_Gupta_Frontend_Developer_Resume.pdf'

const Header = () => {
    return (
        <>
            <div className="header pt-2">
                <div className="padding-same">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={siteLogo} alt="" width={"150px"} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">|||</span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#about">About Me</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#myskills">Skills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="my-all-projects">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#myskills">Exprience</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#contact">Contact Me</a>
                                    </li>

                                </ul>
                                <div className='nav-btn'>
                                    <a href={myCv} target='_blank' download>Download CV &nbsp; <i className="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Header