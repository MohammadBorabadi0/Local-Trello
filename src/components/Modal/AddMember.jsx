import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddMember = ({ task, addTaskMember, setShowAddMember }) => {
  const [name, setName] = useState("");

  return (
    <section className="flex flex-col gap-3 w-[250px] absolute -left-10 -top-10 z-50 rounded-md px-4 pt-3 pb-8 bg-white shadow-lg text-black">
      <header className="flex items-center justify-between">
        <h3 className="font-semibold">Add Member</h3>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setShowAddMember(false);
          }}
          className="text-xl pt-1 cursor-pointer"
        >
          <IoClose />
        </span>
      </header>
      <input
        type="text"
        placeholder="Enter Name"
        className="shadow-small px-2 py-1 rounded-sm"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          addTaskMember(task.id, {
            id: Math.round(Math.random() * 10000),
            name,
          });
          setShowAddMember(false);
        }}
        className="bg-green-600 text-white rounded-sm shadow-lg py-1"
      >
        Add
      </button>
    </section>
  );
};

export default AddMember;
