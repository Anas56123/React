import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//data
const skills = [
  {skill:'HTML+CSS(s)', c:'#0D78DB'},{skill:'JS(m)', c:'#0DDBBA'},{skill:'react(w)', c:'#16DB43'},{skill:'Python(m)' , c:'#E0004B'}
]
// functions
function Avatar() {
  return (<p>Hello</p>)
}

function Intro() {
  return (<p>Hello</p>)
}

function SkillList() {
  return (<div className="skill-list">
    <div className="skill" style={{background: skills[0].c}}>{skills[0].skill}</div>
    <div className="skill" style={{background: skills[1].c}}>{skills[1].skill}</div>
    <div className="skill" style={{background: skills[2].c}}>{skills[2].skill}</div>
    <div className="skill" style={{background: skills[3].c}}>{skills[3].skill}</div>
  </div>)
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
