import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ITasks, ITasksProps } from '../../store/types';

const Tasks = ({ loading, setLoading }: ITasksProps) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks);
  const [page, setPage] = useState(1);

  const [taskOnePage, setTaskOnePage] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const res = await axios('https://rocky-temple-83495.herokuapp.com/tasks');
      dispatch({
        type: 'LOAD_TASKS',
        payload: res.data,
      });
    }
    getTasks();
  }, []);

  useEffect(() => {
    async function getTasksByPage() {
      const res = await axios(
        `https://rocky-temple-83495.herokuapp.com/tasks?_page=${page}&_limit=2`,
      );
      setTaskOnePage(res.data);
    }
    if (tasks.length > 1) {
      getTasksByPage();
    }
  }, [page]);

  return (
    <div>
      {taskOnePage.length
        ? taskOnePage.map((task: ITasks, index: number) => (
            <div key={index} className="employeesInfo">
              <p>{task.name}</p>
              <p>{task.description}</p>
              <p>
                {task.startDate} {task.endDate}
              </p>
            </div>
          ))
        : ''}

      <div>
        {taskOnePage.length > 1 ? (
          taskOnePage.map((task: ITasks, i: number) => (
            <button key={i} onClick={(e: any) => setPage(e.target.innerHTML)}>
              {i + 1}
            </button>
          ))
        ) : (
          <button onClick={(e: any) => setPage(e.target.innerHTML)}>1</button>
        )}
      </div>
    </div>
  );
};

export default Tasks;
