import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import { useTasks } from "./hooks/useTasks";

import "./App.css";

function App() {
  const { tasks, loading, error, addTask, toggleTask, deleteTask, editTask } =
    useTasks();

  return (
    <div className="app">
      <div className="container">
        <Header />

        <TaskForm onAddTask={addTask} />

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!loading && (
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
