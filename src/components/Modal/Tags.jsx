import { IoClose } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";

const Tags = ({
  task,
  setShowTags,
  setShowAddTag,
  deleteTaskTag,
}) => {
  const handleDeleteTag = (e, id) => {
    e.stopPropagation();
    deleteTaskTag(task.id, id);
  };

  return (
    <section className="flex flex-col gap-3 w-[250px] absolute -top-12 -left-[40px] z-50 rounded-md px-3 pt-3 pb-6 bg-white shadow-lg text-black">
      <header className="flex items-center justify-between">
        <h3 className="font-semibold">Tags</h3>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setShowTags(false);
          }}
          className="text-xl pt-1 cursor-pointer"
        >
          <IoClose />
        </span>
      </header>
      {task.tags && (
        <ul className="flex flex-col gap-2">
          {task.tags.map((tag) => (
            <li
              key={tag.id}
              className="relative flex gap-2 bg-gray-100 rounded-md px-2 py-1"
            >
              {tag.name}
              <button
                onClick={(e) => {
                  handleDeleteTag(e, tag.id);
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
        onClick={() => setShowAddTag(true)}
        className="bg-blue-600 text-white rounded-sm py-1"
      >
        {task.tags.lenght ? "Add Another Tag" : "Add Tag"}
      </button>
    </section>
  );
};

export default Tags;
