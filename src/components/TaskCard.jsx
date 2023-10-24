import { useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BiEdit } from "react-icons/bi";
import { useThemeStore } from "@/store/store";
import Modal from "./Modal/Modal";
import AvatarComponent from "./Avatar";

function TaskCard({
  task,
  deleteTask,
  updateTaskContent,
  addTaskMember,
  deleteTaskMember,
  addTaskTag,
  deleteTaskTag,
  tasks,
  setTasks,
}) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
        p-1.5 h-fit items-center flex text-left rounded-xl border-2 cursor-grab relative
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
        className="px-3 py-1.5 h-fit items-center flex text-left rounded-xl cursor-grab relative"
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
          onChange={(e) => updateTaskContent(task.id, e.target.value)}
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
      className={`shadow-sm ${
        lightMode ? "border hover:border-2 hover:border-black" : null
      } px-3 py-1.5 h-fit flex items-center rounded-xl cursor-pointer ${
        lightMode ? "text-gray-600" : "text-gray-200"
      }`}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <section
        className={`flex flex-col w-full whitespace-pre-wrap ${
          !task.tags.length && !task.members.length
            ? "gap-0 h-8 pt-[2px]"
            : "h-fit gap-2"
        }`}
      >
        <div className="flex items-center gap-1 text-white font-semibold">
          {task.tags.length
            ? task.tags.map((tag) => (
                <span key={tag.id} className="text-xs px-1 py-[1px] rounded-md bg-orange-600 w-fit">
                  {tag.name}
                </span>
              ))
            : null}
        </div>
        <div className="flex items-center justify-between">
          <h3>{task.content}</h3>
          {mouseIsOver && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
              className={`rounded opacity-60 hover:opacity-100 ${
                lightMode ? "text-black" : "text-white"
              }`}
            >
              <BiEdit />
            </button>
          )}
        </div>
        <div className="flex items-center justify-end gap-1 text-white">
          {task.members.length
            ? task.members.map((member) => (
                <AvatarComponent key={member.id} name={member.name} />
              ))
            : null}
        </div>
      </section>

      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          deleteTask={deleteTask}
          addTaskMember={addTaskMember}
          deleteTaskMember={deleteTaskMember}
          addTaskTag={addTaskTag}
          deleteTaskTag={deleteTaskTag}
        />
      )}
    </div>
  );
}

export default TaskCard;
