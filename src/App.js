import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import Movies from './pages/Movies';
import Music from './pages/Music';
import Projects from './pages/Projects';
import Thoughts from './pages/Thoughts';

function App() {
  return (
    <Router>
      <div className="App">
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono"></link>
        </head>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/music" element={<Music />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/thoughts" element={<Thoughts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
