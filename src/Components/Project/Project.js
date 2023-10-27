import React from 'react'
import { projectTexts } from '../Utills/Text'

const Project = () => {
  return (
    <section >
      <article>
        <div className='project1'>
        <h2>{projectTexts.PROJECT_1_HEADER}</h2>
        <p>{projectTexts.PROJECT_1_BODY}</p>
        </div>
        <br/>
        <div className='project2'>
        <h2>{projectTexts.PROJECT_2_HEADER}</h2>
        <p>{projectTexts.PROJECT_2_BODY}</p>
        </div>
        <br/>
        <div className='summerjobb'>
          <h2>{projectTexts.SUMMER_JOBB_HEADER}</h2>
          <p>{projectTexts.SUMMER_JOBB_BODY}</p>
        </div>
      </article>
    </section>
  )
}

export default Project
