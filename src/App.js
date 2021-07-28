import logo from './logo.svg';
import './App.css';
import React from 'react';

import data from './bandData';
import Albums from './componentes/album/albums.jsx';

// button to  show/hide a component where you 
//display the songs that belong to that album

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };

  }  
  render () {
  return (
    <div className="App">
        {data.map(album => (
        <Albums key={album.id} albumprop={album}/>
        ))}
    </div>
  );
  
}
}

export default App;