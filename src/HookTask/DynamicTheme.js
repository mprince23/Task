import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const DynamicTheme = () => {
    const { theme, layout, toggleTheme, toggleLayout } = useContext(ThemeContext);

    return (
        <div className={`app ${theme} ${layout}`}>
            <h1>Dynamic Theme and Layout Switcher</h1>
            <button className='btn btn-primary' onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
            <button onClick={toggleLayout} className='btn btn-primary mx-2'>
                Switch to {layout === 'grid' ? 'List' : 'Grid'} Layout
            </button>

            <div className={`content ${layout}`}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aliquam iusto natus in velit recusandae nam doloremque asperiores fugit, odit expedita id facere fugiat omnis iste cumque possimus dolor iure!</p>
            </div>
        </div>
    );
};

export default DynamicTheme