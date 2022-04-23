import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Countrie from './components/Countrie/Countrie';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <main className='mainApp'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/countrie/:name' element={<Countrie />} />
            </Routes>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
