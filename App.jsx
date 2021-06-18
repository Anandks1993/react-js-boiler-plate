import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import store from 'store';

import 'assets/common_styles/style.scss';

const App = () => {
    const [message, setMessage] = useState('Welcome to React JS Boilerplate!!!');

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div style={{
                    backgroundColor: '#000000',
                    color: 'white',
                    textAlign: 'center',
                    height: '200px',
                    fontSize: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div>
                        {message}
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;