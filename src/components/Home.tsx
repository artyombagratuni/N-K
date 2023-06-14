import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <Link to="employees">Employees</Link>
        <Link to="tasks">Tasks</Link>
      </header>
    </div>
  );
};

export default Home;
