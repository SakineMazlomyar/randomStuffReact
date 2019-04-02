import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';
import Clock from './components/clock';
import Welcome from './components/welcome';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <div>
        <Button />
        <Clock />
    </div> ,document.getElementById('root')

    );
serviceWorker.unregister();
