import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Employees from './pages/employees/Employees';
import Tasks from './pages/tasks/Tasks';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Tasks"
          element={<Tasks loading={loading} setLoading={setLoading} />}
        />
        <Route
          path="/employees"
          element={<Employees loading={loading} setLoading={setLoading} />}
        />

        <Route path="*" element={<div>ERROR 404</div>} />
      </Routes>
    </>
  );
}

export default App;
