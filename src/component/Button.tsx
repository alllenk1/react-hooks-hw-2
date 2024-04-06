import React from 'react';

import { cnButton } from './Button.classname';
import { useClickCount } from '../hook/useClickCount';

import './Button.css';

const Button = () => {
    const { count, componentRef } = useClickCount();
    
    return (
        <button className={cnButton('')} ref={componentRef}>
            Количество кликов: {count}
        </button>
    );
}

export { Button };
