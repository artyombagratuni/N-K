import React from 'react';
import { useSelector } from 'react-redux';

import { ITasks } from '../../store/types';

const Tasks = () => {
  const tasks = useSelector((state: any) => state.tasks);

  return (
    <div>
      {tasks.length
        ? tasks.map((task: ITasks, index: number) => (
            <div key={index}>
              <p>
                {task.name} {task.description} {task.startDate} {task.endDate}
              </p>
            </div>
          ))
        : ''}
    </div>
  );
};

export default Tasks;
