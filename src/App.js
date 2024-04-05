import './Components/Css/App.css';
import Notes from './Components/NoteComponents/Notes';
import Header from './Components/NoteComponents/Header';
import Navbar from './navbar';
import logo from './logo.svg';
import video from './abstract2.mp4'


function App() {
  return (
    <div className="main">
      <Navbar/>
      <div className="overlay">
        <video src={video} autoPlay loop muted  />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo " alt="logo" />
        <p className='p'>
          Speechpad 
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Workspace to convert your speech to text
        </a>
      </header>
      <Header/>
      <Notes/>

    </div>
  );
}

export default App;
