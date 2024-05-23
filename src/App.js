import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TableTennis from './pages/TableTennis';
import Projects from './pages/Projects';
import Socials from './pages/Socials';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tabletennis" element={<TableTennis />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </BrowserRouter>
  );
}