import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Countrie from './components/Countrie/Countrie';
import { ThemeProvider } from './contexts/ThemeContext';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/countrie/:name' element={<Countrie />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
