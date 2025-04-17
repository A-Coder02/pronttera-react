import React from 'react'
import Component from './Component';
import Button from './Button';
const App = () => {
  return <div>
    <p>React + Vite Application</p>
    <Component name="Heena" skills={["HTML", "CSS", "JS"]} />
    <Component name="Faizan" skills={["HTML", "CSS", "JS", "C", "React Js"]} />
    <Component name="Mahek" skills={["HTML", "CSS", "JS", "C++", "Node Js"]} />
    <Button></Button>
    <Button></Button>
  </div>
}

export default App;
