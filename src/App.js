import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono"></link>
      </head>
      <Navbar/>
      <h2 className="mainHeader">
        Hi, I'm Shrey Khater
      </h2>
      <p className = "aboutText">
        I'm a senior at NYU (graduating Dec 2025) double majoring in Computer Science and NYU Stern's Business, Technology, & Entrepreneurship program (sorry if that's a mouthful). I've worked at a web3 startup called DoraHacks doing quantum computing software research and software development as well as interned at Capital One working in IOS dev. I love seeing new places (30 countries and counting), reading, watching movies, anything to do with music, and creating lifelong experiences with the people closest to me :)
      </p>
    </div>
  );
}

export default App;
