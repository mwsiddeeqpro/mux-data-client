import { useEffect } from 'react';
import mux from 'mux-embed';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize Mux Data monitoring
    if (typeof mux !== 'undefined') {
      console.log('Mux: ', mux);
      mux.monitor('#my-video', {
        debug: true,
        data: {
          env_key: 'p93ggr3j0kbu2d924p1m0b5n3', // required

          // Metadata
          player_name: 'Little Bear', // ex: 'My Main Player'
          player_init_time: window.muxPlayerInitTime // ex: 1451606400000

          // ... and other metadata
        }
      });
    }
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <video id="my-video" src="https://www.w3schools.com/html/movie.mp4" controls width="500" height="400"></video>
      </header>
    </div>
  );
}

export default App;
