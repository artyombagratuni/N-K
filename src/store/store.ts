import { combineReducers, createStore } from 'redux';

import { IEmployees, ITasks } from './types';

const employees: IEmployees[] = [];
const tasks: ITasks[] = [];

const employeesReducer = (state = employees, action: any) => {
  switch (action.type) {
    case 'LOAD-EMPLOYEES':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const tasksReducer = (state = tasks, action: any) => {
  switch (action.type) {
    case 'LOAD-TASKS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const reducer = combineReducers({
  employees: employeesReducer,
  tasks: tasksReducer,
});

const store = createStore(reducer);

export default store;
