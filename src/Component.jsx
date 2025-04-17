import React from "react";

const Component = ({name, skillSet}) => {
  const name = 'Mahek'
  return (
    <div style={{
        padding : "1rem",
        marginBottom : '1rem'
      }}>
      <h3 >Hello {name}!</h3>
      <h4>Skill Set</h4>
      <ul>{skillSet.map(function(skill, index){
        return <li key={index} >{skill}</li>
      })}</ul>
    </div>
  );
};

export default Component;

// Destructing in Function

