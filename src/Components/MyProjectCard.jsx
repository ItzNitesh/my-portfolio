import React, { useEffect } from 'react'


const MyProjectCard = (props) => {
    useEffect(() => {

    })
    return (
        <>
            <div className='project-card h-100'>
                <img src={props.img} alt="" />
                <div className='project-details'>
                    <h4>{props.title}</h4>
                    <p>{props.para}</p>
                    <div className='project-lang'>
                        {props.lang1 && <p className='color1'>{props.lang1}</p>}
                        {props.lang2 && <p className='color2'>{props.lang2}</p>}
                        {props.lang3 && <p className='color3'>{props.lang3}</p>}
                        {props.lang4 && <p className='color4'>{props.lang4}</p>}
                        {props.lang5 && <p className='color5'>{props.lang5}</p>}
                        {props.lang6 && <p className='color1'>{props.lang6}</p>}
                        {props.lang7 && <p className='color3'>{props.lang7}</p>}
                    </div>
                    <div className="hire-btn-top mt-2 mb-1">
                        {/* <a href="my-all-projects" className='px-2 py-2 d-flex align-items-center w-100 justify-content-center' style={{fontSize:"14px"}}>Know More &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a> */}
                        <a href={props.projectUrl} target="_blank"
                            rel="noopener noreferrer" className='my-work-btn px-4 py-2 d-flex align-items-center  justify-content-center' style={{ fontSize: "14px" }}>View Project &nbsp;&nbsp;<i class="fa-solid fa-eye"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProjectCard