import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getLocalStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};
function App() {
  const [theme, settheme] = useState(getLocalStorageTheme());
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggletheme = () => {
    if (theme === 'light-theme') {
      settheme('dark-theme');
    } else settheme('light-theme');
  };

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn btn-bg' onClick={toggletheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className=' articles'>
        {data.map(items => {
          return <Article key={items.id} {...items}></Article>;
        })}
      </section>
    </main>
  );
}

export default App;
