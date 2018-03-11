import React from 'react';

class App extends React.Component {
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