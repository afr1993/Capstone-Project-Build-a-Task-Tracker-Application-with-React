import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completadas
        </button>
        <button
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => setFilter('pending')}
        >
          Pendientes
        </button>
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default Dashboard;
