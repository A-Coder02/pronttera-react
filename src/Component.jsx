import React from "react";

const Component = ({name, skills}) => {
  // const name = 'Mahek'
  return (
    <div style={{
        padding : "1rem",
        marginBottom : '1rem'
      }}>
      <h3 >Hello {name}!</h3>
      <h4>Skills</h4>
      <ul>{skills.map(function(skill, index){
        return <li key={index} >{skill}</li>
      })}</ul>
    </div>
  );
};

export default Component;

// Destructing in Function

