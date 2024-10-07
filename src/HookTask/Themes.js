import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Theme useEffect

  const [theme1, setTheme1] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme1(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme1;
    localStorage.setItem1('theme', theme1);
  }, [theme1]);

  const toggleTheme = () => {
    setTheme1((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* <div className='container p-5 '>
        <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
        <button onClick={handleTheme} className="btn-toggle">
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum minima labore eveniet cupiditate deleniti, quasi consequuntur, atque quisquam excepturi perspiciatis pariatur.</p>
      </div> */}


      {/* Theme useEffect */}

      <div className="container text-center mt-4">
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
        <button className="btn btn-primary" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
