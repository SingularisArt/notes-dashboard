import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { VscHome, VscCalendar, VscMail } from "react-icons/vsc";
import { TbMathFunction } from 'react-icons/tb';
import { FiBookOpen } from 'react-icons/fi';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="sidenav">
        <div className="header">Note Manager</div>
        <hr />
        <br />
        <a href="#"><VscHome /> Home</a>
        <a href="#"><VscMail /> E-Mail</a>
        <a href="#"><VscCalendar /> Calendar</a>
        <br />
        <a href="#"><TbMathFunction /> Pre-Calculus 2</a>
        <a href="#"><FiBookOpen /> College Composition</a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
