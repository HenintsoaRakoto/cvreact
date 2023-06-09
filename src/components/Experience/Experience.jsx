import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--primary)':''}}>+2</div>
        <span  style={{color: darkMode?'white':''}}>ans </span>
        <span>D'expérience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--primary)':''}}>+20</div>
        <span  style={{color: darkMode?'white':''}}>projets </span>
        <span>terminé</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--primary)':''}}>+5</div>
        <span  style={{color: darkMode?'white':''}}>travail </span>
        <span>D'entreprise</span>
      </div>
    </div>
  );
};

export default Experience;
