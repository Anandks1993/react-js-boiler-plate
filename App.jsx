import React, { Component } from 'react';

import Header from 'scenes/Header';
import Home from 'scenes/Home';
import Footer from 'scenes/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>            
        );
   }
}

export default App;