import './Home.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => navigate('/employees')}>Employee</button>
        </li>
        <li>
          <button onClick={() => navigate('/tasks')}>Task</button>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
