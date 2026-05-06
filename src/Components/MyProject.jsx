import React, { useEffect, useState } from 'react'
import MyProjectCard from './MyProjectCard'
import ProjectList from './ProjectApi'


const MyProject = () => {

    
    const [prodata, setProData] = useState([])
    useEffect(() => {
        setProData(ProjectList)
    })

    useEffect(() => {
        if (prodata.length > 0) {
            setTimeout(() => {
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 20,
                    nav: true,
                    dots: false,
                    responsive: {
                        0: { items: 1 },
                        768: { items: 2 },
                        1200: { items: 3 }
                    }
                });
            }, 100);
        }
    }, [prodata]);
    return (
        <>
            <section>
                <div className="padding-same">
                    <div className="my-project-sec p-lg-4 p-2">
                        <div className="container-fluid">
                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <h3 className='heading-title'>My Projects</h3>

                                <div className='nav-btn'>
                                    <a href="my-all-projects">View All Projects &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>

                            {/* <div className="row mt-lg-5 mt-3">
                                {
                                    prodata.length > 0 ? (
                                        prodata.map((e, index) => (
                                            <div className="col-xl-4" key={index}>
                                                <MyProjectCard img={e.projectImg} title={e.projectTitle} para={e.projectpara} lang1={e.projectlang.lang1} lang2={e.projectlang.lang2} lang3={e.projectlang.lang3} lang4={e.projectlang.lang4} lang5={e.projectlang.lang5} btnName="View Demo" />
                                            </div>


                                        ))
                                    ) : <><p className='text-cente text-white m-0 h4'>Fetching Project Data</p></>
                                }
                            </div> */}

                            <div class="owl-carousel">

                                {
                                    prodata.length > 0 ? (
                                        prodata.map((e, index) => (
                                            <div className="item" key={index} projectUrl={e.projectUrl}>

                                                <MyProjectCard
                                                    img={e.projectImg}
                                                    title={e.projectTitle}
                                                    para={e.projectpara}
                                                    lang1={e.projectlang.lang1}
                                                    lang2={e.projectlang.lang2}
                                                    lang3={e.projectlang.lang3}
                                                    lang4={e.projectlang.lang4}
                                                    lang5={e.projectlang.lang5}
                                                    lang6={e.projectlang.lang6}
                                                    lang7={e.projectlang.lang7}
                                                    projectUrl={e.projectUrl}
                                                />

                                            </div>
                                        ))
                                    ) : (
                                        <p className='text-center text-white m-0 h4'>
                                            Fetching Project Data...
                                        </p>
                                    )
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyProject