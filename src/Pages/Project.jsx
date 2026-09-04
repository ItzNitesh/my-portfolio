import React, { useEffect, useState } from 'react'
import ProjectList from '../Components/ProjectApi'
import MyProjectCard from '../Components/MyProjectCard'

const Project = () => {
  const [projectData, setProjectData] = useState([])
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    setProjectData(ProjectList)
  }, [])

  const filteredProjects = projectData.filter((project) => {
    if (filter === "All") return true;

    const langs = Object.values(project.projectlang || {})

    if (filter === "HTML/CSS") {
      return langs.includes("HTML") || langs.includes("CSS")
    }

    return langs.includes(filter)
  })

  return (
    <section>
      <div className="padding-same">
        <div className="container-fluid">
          <div className="project-page p-lg-4 p-2">

            <h6>My Project List</h6>

            <p className='text-center text-white' style={{ fontSize: "14px" }}>
              Explore My Latest Projects Developed Using Modern Technologies,
              focusing on responsive design and performance.
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap filter-btn">
              <button
                className={filter === "All" ? "active-btn" : ""}
                onClick={() => setFilter("All")}
              >
                All
              </button>

              <button
                className={filter === "HTML/CSS" ? "active-btn" : ""}
                onClick={() => setFilter("HTML/CSS")}
              >
                HTML/CSS
              </button>

              <button
                className={filter === "JavaScript" ? "active-btn" : ""}
                onClick={() => setFilter("JavaScript")}
              >
                JavaScript
              </button>

              <button
                className={filter === "React JS" ? "active-btn" : ""}
                onClick={() => setFilter("React JS")}
              >
                React
              </button>

              <button
                className={filter === "WordPress" ? "active-btn" : ""}
                onClick={() => setFilter("WordPress")}
              >
                WordPress
              </button>
            </div>

            <div className="row mt-3">
              {
                filteredProjects.length > 0 ? (
                  filteredProjects.map((e, index) => (
                    <div className="col-xl-4 col-md-6 mt-4" key={index}>
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
                  <p className='text-white text-center mt-4'>Loading Projects, Please Wait...</p>
                )
              }
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Project