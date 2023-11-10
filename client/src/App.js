import './App.css';
import Inicio from './components/inicio';
import Peliculas from './components/peliculas';
import Series from './components/series';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />}></Route>
      <Route path='/series' element={<Series/>}></Route>
      <Route path='/peliculas' element={<Peliculas/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;