import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Notes from './Notes';
import notes from '../notes';

function App() {
    return <div>
    <Heading />
    {notes.map( x => (
        <Notes
            title={x.title}
            content={x.content}
        />
    ))}
    <Footer />
    </div>
}

export default App;