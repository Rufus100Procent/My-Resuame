import React from 'react'
import './Projects.css'
import ProjectItem from './ProjectItem'
import {ProjectList} from './helpers/ProjectList';

export const Projects = () => {
  return (
    <div className='projects'>
       <h1> My Projects</h1>
      <div className='projectList'>
        {ProjectList.map((projects, idx) => {
          return <ProjectItem id={idx} name={projects.name} image={projects.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects