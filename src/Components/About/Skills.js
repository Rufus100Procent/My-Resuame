import React from 'react';
import './Skills.css'; // Import the CSS file for styling
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
  const skills = [
    {
      category: 'Backend',
      list: [
        { skill: 'Java', rating: 3 },
        { skill: 'Spring Boot', rating: 3 },
        { skill: 'Maven', rating: 4 },
        { skill: 'Relational Database', rating: 3 },
      ],
    },
    {
      category: 'Frontend',
      list: [
        { skill: 'JavaScript', rating: 2 },
        { skill: 'React', rating: 2 },
        { skill: 'HTML', rating: 4 },
        { skill: 'CSS', rating: 3 },
      ],
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= rating ? 'star filled' : 'star'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="skills">
      <h1 className="skills-h1">Skills</h1>
      <div className="skills-sections">

        {skills.map(({ category, list }) => (
          <div key={category} className="skills-category">
            <h2>{category}</h2>
            {list.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-info">
                  <h3>{skill.skill}</h3>
                  <div className="skill-rating">{renderStars(skill.rating)}</div>
                </div>
              </div>
            ))}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Skills;
