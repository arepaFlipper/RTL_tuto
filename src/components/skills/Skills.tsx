import { TSkills } from './Skills.types';

const Skills = ({ skills }: TSkills) => {
  return (
    <>
      <ul>
        {skills.map((skill: string) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </>
  );
};

export default Skills;
