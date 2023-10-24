import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsTag } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Members from "./Members";
import Tags from "./Tags";
import AddMember from "./AddMember";
import AddTag from "./AddTag";

const Modal = ({
  setShowModal,
  task,
  deleteTask,
  addTaskMember,
  deleteTaskMember,
  addTaskTag,
  deleteTaskTag,
}) => {
  const [showMembers, setShowMembers] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);

  return (
    <section
      onClick={(e) => {
        e.stopPropagation();
        setShowModal(false);
      }}
      className="fixed inset-0 flex justify-center items-center cursor-default w-screen h-screen bgModal z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F1F2F4] text-black w-[200px] px-4 pt-3 pb-6 rounded-md shadow-md"
      >
        <header className="flex items-center mb-2 pb-2 border-b gap-8 text-gray-700">
          <h4>Add to template</h4>
          <span
            onClick={() => setShowModal(false)}
            className="text-xl pt-1 cursor-pointer"
          >
            <IoClose />
          </span>
        </header>
        <span
          onClick={() => setShowMembers(true)}
          className="relative flex items-center gap-2 hover:bg-slate-200 w-full rounded-md px-2 py-1"
        >
          <AiOutlineUser />
          Members
          {showMembers && (
            <Members
              task={task}
              setShowMembers={setShowMembers}
              setShowAddMember={setShowAddMember}
              deleteTaskMember={deleteTaskMember}
            />
          )}
          {showAddMember && (
            <AddMember
              setShowAddMember={setShowAddMember}
              addTaskMember={addTaskMember}
              task={task}
            />
          )}
        </span>
        <span
          onClick={() => setShowTags(true)}
          className="relative flex items-center gap-2 hover:bg-slate-200 w-full rounded-md px-2 py-1"
        >
          <BsTag />
          Tags
          {showTags && (
            <Tags
              task={task}
              setShowTags={setShowTags}
              setShowAddTag={setShowAddTag}
              deleteTaskTag={deleteTaskTag}
            />
          )}
          {showAddTag && (
            <AddTag
              setShowAddTag={setShowAddTag}
              addTaskTag={addTaskTag}
              task={task}
            />
          )}
        </span>
        <button
          onClick={() => deleteTask(task.id)}
          className="relative flex items-center gap-2 hover:bg-slate-200 w-full rounded-md px-2 py-1"
        >
          <BiTrash />
          Delete Card
        </button>
      </div>
    </section>
  );
};

export default Modal;
