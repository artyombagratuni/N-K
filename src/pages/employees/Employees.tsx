import './style.css';

import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Loader from '../../components/loader/Loader';
import { employeesSchema } from '../../schemas/employeesSchema';
import { IEmployeesProps, IFormData } from '../../store/types';

const Eployees = ({ loading, setLoading }: IEmployeesProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const employees = useSelector((state: any) => state.employees);
  const [page, setPage] = useState(1);
  const [employeeOnePage, setEmployeeOnePage] = useState([]);

  const [countOfEmployees, setCountOfEmployees] = useState(0);

  const handleCreateEmployee = async (values: IFormData, action: any) => {
    try {
      await axios.post('https://rocky-temple-83495.herokuapp.com/employees', values);
      action.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function getEmployees() {
      setLoading(true);
      const res = await axios('https://rocky-temple-83495.herokuapp.com/employees');
      setLoading(false);
      setCountOfEmployees(res.data.length);
      dispatch({
        type: 'LOAD_EMPLOYEES',
        payload: res.data,
      });
    }
    getEmployees();
  }, []);

  useEffect(() => {
    async function getEmployeeByPage() {
      setLoading(true);
      const res = await axios(
        `https://rocky-temple-83495.herokuapp.com/employees?_page=${page}&_limit=5`,
      );
      setLoading(false);
      setEmployeeOnePage(res.data);
    }
    getEmployeeByPage();
  }, [page]);

  return (
    <div>
      <button onClick={() => navigate('/')} style={{ margin: 50 }}>
        BACK TO HOME
      </button>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          position: '',
        }}
        validationSchema={employeesSchema}
        onSubmit={handleCreateEmployee}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="fields">
              <div className="input_label">
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" />
              </div>
              <ErrorMessage className="error" name="name" component="div" />
            </div>

            <div className="fields">
              <div className="input_label">
                <label htmlFor="surname">Surname:</label>
                <Field type="text" id="surname" name="surname" />
              </div>
              <ErrorMessage className="error" name="surname" component="div" />
            </div>

            <div className="fields">
              <div className="input_label">
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
              </div>
              <ErrorMessage className="error" name="email" component="div" />
            </div>
            <div className="fields">
              <div className="input_label">
                <label htmlFor="position">Position:</label>
                <Field type="text" id="position" name="position" />
              </div>
              <ErrorMessage className="error" name="position" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting} style={{ background: 'green' }}>
              Create Employee
            </button>
          </Form>
        )}
      </Formik>

      {employeeOnePage.length && !loading ? (
        employeeOnePage.map((emp: any, index: number) => (
          <div key={index} className="employeesInfo">
            <p>
              {emp.name} {emp.surname}
            </p>
            <p>{emp.email}</p>
            <p>{emp.position}</p>
          </div>
        ))
      ) : (
        <Loader />
      )}

      <div>
        {new Array(Math.ceil(countOfEmployees / 5))
          .fill(null)
          .map((x: null, index: number) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === page;

            return (
              <button
                key={index}
                className={isActive ? 'active' : ''}
                onClick={(e: any) => {
                  if (!isActive) {
                    e.target.classList.add('active');
                    setPage(pageNumber);
                  }
                }}
              >
                {pageNumber}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Eployees;
