import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';

const EditTask = () => {
  const { id } = useParams();
  const { tasks, updateTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const task = tasks.find(t => t.id === id);
  if (!task) return <p>Tarea no encontrada</p>;

  const handleUpdate = (updatedData) => {
    updateTask({ ...task, ...updatedData });
    navigate('/');
  };

  return (
    <div>
      <h2>Editar Tarea</h2>
      <TaskForm initialTask={task} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditTask;
