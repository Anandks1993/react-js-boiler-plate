import React, { Component } from 'react';
import './src/assets/common_styles/style.scss';

class App extends Component {
    render() {
        return (
            <div style={{
                    backgroundColor: '#000000',
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    height: '200px',
                    fontSize: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <div>
                    Welcome to React JS Boilerplate!!!
                </div>
            </div>
        );
   }
}

export default App;