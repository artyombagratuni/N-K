import './style.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Eployees = () => {
  const employees = useSelector((state: any) => state.employees);

  return (
    <div>
      {employees.length
        ? employees.map((emp: any, index: number) => (
            <div key={index} className="eployeesInfo">
              <p>
                {emp.name} {emp.surname}
              </p>
              <p>{emp.email}</p>
              <p>{emp.position}</p>
            </div>
          ))
        : ''}
    </div>
  );
};

export default Eployees;
