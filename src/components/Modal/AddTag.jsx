import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddTag = ({ task, addTaskTag, setShowAddTag }) => {
  const [name, setName] = useState("");

  return (
    <section className="flex flex-col gap-3 w-[250px] absolute -left-10 -top-10 z-50 rounded-md px-4 py-3 bg-white shadow-lg text-black">
      <header className="flex items-center justify-between">
        <h3>Add Tag</h3>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setShowAddTag(false);
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
          addTaskTag(task.id, {
            id: Math.round(Math.random() * 10000),
            name,
          });
          setShowAddTag(false);
        }}
        className="bg-green-600 text-white rounded-sm shadow-lg py-1"
      >
        Add
      </button>
    </section>
  );
};

export default AddTag;
