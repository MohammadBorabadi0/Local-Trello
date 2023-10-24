import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import { BiPlus, BiTrash } from "react-icons/bi";
import { useThemeStore } from "@/store/store";

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  setTasks,
  deleteTask,
  updateTaskContent,
  addTaskMember,
  deleteTaskMember,
  addTaskTag,
  deleteTaskTag,
}) {
  const [editMode, setEditMode] = useState(false);

  const { bgTheme, lightMode } = useThemeStore((state) => state);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    backgroundColor: bgTheme,
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        pt-6
      opacity-40
      border-2
      bg-gray-400
      w-[275px]
      min-h-[200px]
      h-fit
      rounded-md
      flex
      flex-col
    "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
      w-[275px]
      h-fit
      max-h-[78vh]
      shadow-lg
      rounded-md
      flex
      flex-col
    "
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className={`
        ${lightMode ? "text-black" : "text-white"}
        text-md
        h-[60px]
        cursor-grab
        rounded-md
        rounded-b-none
        p-3
        font-bold
        flex
        items-center
        justify-between
        relative
      `}
      >
        <div className="flex items-center gap-2">
          {!editMode && column.title}
          {editMode && (
            <input
              className="h-full bg-white border-2 rounded-lg outline-none px-2 py-1"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteColumn(column.id);
          }}
          className="text-lg mt-1 rounded p-2 hover:bg-gray-300"
        >
          <BiTrash />
        </button>
      </div>

      {/* Column task container */}
      <div
        style={{ backgroundColor: bgTheme }}
        className="flex flex-grow flex-col gap-3 p-2 overflow-x-hidden overflow-y-auto"
      >
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              deleteTask={deleteTask}
              updateTaskContent={updateTaskContent}
              addTaskMember={addTaskMember}
              addTaskTag={addTaskTag}
              deleteTaskTag={deleteTaskTag}
              deleteTaskMember={deleteTaskMember}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        style={{ backgroundColor: bgTheme }}
        className={`flex gap-2 items-center rounded-b-md px-4 py-3 ${
          lightMode ? "text-black" : "text-white"
        }`}
        onClick={() => {
          createTask(column.id);
        }}
      >
        <BiPlus />
        Add task
      </button>
    </div>
  );
}

export default ColumnContainer;
