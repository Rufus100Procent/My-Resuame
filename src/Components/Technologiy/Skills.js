import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Skills.css';

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
    <div className="Skills-container">
      <div className="backend">
        <h2>Backend Skills</h2>
        <ul>
          {skills[0].list.map((skill, index) => (
            <li key={index}>
              {skill.skill} {renderStars(skill.rating)}
            </li>
          ))}
        </ul>
      </div>

      <div className="frontend">
        <h2>Frontend Skills</h2>
        <ul>
          {skills[1].list.map((skill, index) => (
            <li key={index}>
              {skill.skill} {renderStars(skill.rating)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
