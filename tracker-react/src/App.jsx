import './App.css'
import Dashboard from './pages/Dashboard';
import {Route, Routes } from 'react-router-dom';
import Moods from './pages/Moods';
import Sleep from './pages/Sleep';
import Steps from './pages/Steps';
import Water from './pages/Water';
import Meals from './pages/Meals';
import Exercices from './pages/Exercices';
import Goals from './pages/Goals';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/mood' element={<Moods />}></Route>
      <Route path='/sleep' element={<Sleep />}></Route>
      <Route path='/step' element={<Steps />}></Route>
      <Route path='/water' element={<Water/>}></Route>
      <Route path='/meal' element={<Meals/>}></Route>
      <Route path='/exercise' element={<Exercices />}></Route>
      <Route path='/goal' element={<Goals />}></Route>
    </Routes>
  );
};
export default App
