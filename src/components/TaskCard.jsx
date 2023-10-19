import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BiTrash } from "react-icons/bi";
import { useThemeStore } from "@/store/store";

function TaskCard({ task, deleteTask, updateTask }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [showCardOptions, setShowCardOptions] = useState(false);

  const { lightMode } = useThemeStore((state) => state);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    backgroundColor: lightMode ? "#fff" : "#4E5255",
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
        p-1.5 h-9 items-center flex text-left rounded-xl border-2 cursor-grab relative
      "
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="px-4 py-1.5 h-fit items-center flex text-left rounded-xl cursor-grab relative"
      >
        <input
          className={`
          ${lightMode ? "text-gray-600" : "text-gray-400"}
        h-fit w-full border-none rounded bg-transparent focus:outline-none
        `}
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            toggleEditMode();
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className={`shadow-sm px-4 py-1.5 h-fit items-center flex text-left rounded-xl cursor-grab relative ${
        lightMode ? "text-gray-600" : "text-gray-400"
      }`}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>

      {mouseIsOver && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded opacity-60 hover:opacity-100 ${
            lightMode ? "text-black" : "text-white"
          }`}
        >
          <BiTrash />
        </button>
      )}
      {showCardOptions && (
        <TaskModal
          showCardOptions={showCardOptions}
          setShowCardOptions={setShowCardOptions}
          deleteTask={deleteTask}
          setEditMode={setEditMode}
          task={task}
        />
      )}
    </div>
  );
}

export default TaskCard;
