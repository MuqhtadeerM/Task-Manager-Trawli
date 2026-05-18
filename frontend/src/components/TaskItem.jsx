import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    if (!editedTitle.trim()) return;

    onEdit(task.id, editedTitle);

    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="task-content task-edit-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id, !task.completed)}
        />

        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <span className={task.completed ? "completed" : ""}>
            {task.title}
          </span>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
