import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Employees from './pages/employees/Employees';
import Tasks from './pages/tasks/Tasks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getEmployees() {
      const res = await axios(
        'https://rocky-temple-83495.herokuapp.com/employees?_page=1&_limit=5',
      );
      dispatch({
        type: 'LOAD-EMPLOYEES',
        payload: res.data,
      });
    }
    async function getTasks() {
      const res = await axios('https://rocky-temple-83495.herokuapp.com/tasks');
      dispatch({
        type: 'LOAD-TASKS',
        payload: res.data,
      });
    }
    getEmployees();
    getTasks();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/employees" element={<Employees />} />

        <Route path="*" element={<div>ERROR 404</div>} />
      </Routes>
    </>
  );
}

export default App;
