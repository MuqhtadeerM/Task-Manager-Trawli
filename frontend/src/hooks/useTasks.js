import { useEffect, useState } from "react";
import { api } from "../services/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await api.getTasks();

      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async (title) => {
    try {
      await api.createTask(title);
      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  // Toggle task
  const toggleTask = async (id, completed) => {
    try {
      await api.toggleTask(id, completed);
      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await api.deleteTask(id);
      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  // edit task
  const editTask = async (id, title) => {
    try {
      await api.editTask(id, title);

      fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
  };
};
