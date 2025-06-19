import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/task/:id" element={<EditTask />} />
    </Routes>
  );
}
