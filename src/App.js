import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Countrie from './components/Countrie/Countrie';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/countrie/:name' element={<Countrie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
