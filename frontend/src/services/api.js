const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const headers = {
  "Content-Type": "application/json",
};

export const api = {
  // Get all tasks
  getTasks: async () => {
    const res = await fetch(`${BASE_URL}/tasks/`);

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return res.json();
  },

  // Create task
  createTask: async (title) => {
    const res = await fetch(`${BASE_URL}/tasks/`, {
      method: "POST",
      headers,
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Failed to create task");
    }

    return res.json();
  },

  // Toggle complete
  toggleTask: async (id, completed) => {
    const res = await fetch(`${BASE_URL}/tasks/${id}/`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ completed }),
    });

    if (!res.ok) {
      throw new Error("Failed to update task");
    }

    return res.json();
  },

  // Delete task
  deleteTask: async (id) => {
    const res = await fetch(`${BASE_URL}/tasks/${id}/`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete task");
    }
  },

  //   edit task
  editTask: async (id, title) => {
    const res = await fetch(`${BASE_URL}/tasks/${id}/`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Failed to edit task");
    }

    return res.json();
  },
};
