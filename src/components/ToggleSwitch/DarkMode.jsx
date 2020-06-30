import React, { useState, useEffect } from 'react';

const Switch = () => {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if(!darkMode) {
      document.body.classList.add("white-content");
    } else {
      document.body.classList.remove("white-content");
    }
  }, [darkMode])

  return (
    <div className="toggle-switch">
      <span>Dark Mode</span>
      <input 
        type="checkbox" 
        id="darkMode" 
        onChange={() => setDarkMode(!darkMode)}
        checked={darkMode}
        />
      <label htmlFor="darkMode">Toggle</label>
    </div>
  );
};

export default Switch;



