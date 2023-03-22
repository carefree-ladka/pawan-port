export default function Skills({ data }) {
  const {
    skills,
  } = data ;
  return (
    <div className="skills">
         <h2>Skills</h2>
      <div className="skills-frontend">
        {skills?.frontend?.map((skill) => (
          <span key={skill} className="skill">{skill}</span>
        ))}
      </div>
      <div className="skills-backend">
        {skills?.backend?.map((skill) => (
          <span key={skill} className="skill">{skill}</span>
        ))}
      </div>
    </div>
  );
}
