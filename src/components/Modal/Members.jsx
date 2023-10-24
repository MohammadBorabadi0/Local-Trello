import { IoClose } from "react-icons/io5";
import AvatarComponent from "../Avatar";
import { BiTrash } from "react-icons/bi";

const Members = ({
  task,
  setShowMembers,
  setShowAddMember,
  deleteTaskMember,
}) => {
  const handleDeleteMember = (e, id) => {
    e.stopPropagation();
    deleteTaskMember(task.id, id);
  };

  return (
    <section className="flex flex-col gap-3 w-[250px] absolute -top-12 -left-[40px] z-50 rounded-md px-3 pt-3 pb-6 bg-white shadow-lg text-black">
      <header className="flex items-center justify-between">
        <h3 className="font-semibold">Members</h3>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setShowMembers(false);
          }}
          className="text-xl pt-1 cursor-pointer"
        >
          <IoClose />
        </span>
      </header>
      {task.members && (
        <ul className="flex flex-col gap-2">
          {task.members.map((item) => (
            <li
              key={item.id}
              className="relative flex gap-2 bg-gray-100 rounded-md px-2 py-1"
            >
              <AvatarComponent name={item.name} />
              {item.name}
              <button
                onClick={(e) => {
                  handleDeleteMember(e, item.id);
                }}
                className="absolute right-2 pt-1"
              >
                <BiTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setShowAddMember(true)}
        className="bg-blue-600 text-white rounded-sm py-1"
      >
        {task.members.lenght ? "Add Another Member" : "Add Member"}
      </button>
    </section>
  );
};

export default Members;
