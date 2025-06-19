import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleAdd = (task) => {
    addTask({ ...task, id: uuidv4(), completed: false });
    navigate('/');
  };

  return (
    <div>
      <h2>Agregar Nueva Tarea</h2>
      <TaskForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddTask;
