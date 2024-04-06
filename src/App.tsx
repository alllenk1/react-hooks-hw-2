import React from 'react';

import { cnApp } from './App.classname';
import { Button } from './component/Button';

import './App.css';

const App = () => {
    return (
        <div  className={cnApp('')}>
            <h1 className={cnApp('Title')}>8.4 React-хуки</h1>
            <h2 className={cnApp('Subtitle')}>Клик-полл</h2>
            
            <Button />
        </div>
    );
}

export default App;
