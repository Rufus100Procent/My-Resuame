import React from 'react'
import { projectTexts } from '../Utills/Text'

const Project = () => {
  return (
    <section >
      <article>
        <div className='project1'>
        <h2>Full Stack Application</h2>
        <p>{projectTexts.PROJECT_1}</p>
        </div>
        <br/>
        <div className='project2'>
        <h2>Worked with AWS CI/CD</h2>
        <p>{projectTexts.PROJECT_2}</p>
        </div>
        <br/>
        <div className='summerjobb'>
          <h2>summerjobb</h2>
          <p>{projectTexts.SUMMER_JOBB}</p>
        </div>
      </article>
    </section>
  )
}

export default Project
