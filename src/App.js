import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Countrie from './components/Countrie/Countrie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className='mainApp'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/countrie/:name' element={<Countrie />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
