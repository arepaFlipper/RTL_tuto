import { useState, useEffect } from 'react';
import { TSkills } from './Skills.types';

const Skills = ({ skills }: TSkills) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill: string) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>
          Start learning
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
