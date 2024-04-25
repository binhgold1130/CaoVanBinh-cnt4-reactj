import React, { Component } from 'react';
import EventForm1 from './components/EventForm1';
import EventForm2 from './components/EventForm2';
import EventForm3 from './components/EventForm3';
import EventForm4 from './components/EventForm4';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Event form Demo</h1>
                <EventForm1 />
                <EventForm2 />
                <EventForm3 />
                <EventForm4 name="Cao Văn Bình"/> 
            </div>
        );
    }
}

export default App;