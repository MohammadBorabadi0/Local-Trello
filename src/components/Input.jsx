import { BiErrorCircle } from "react-icons/bi";

const Input = ({
  type,
  placeholder,
  name,
  errorMsg,
  isError,
  value,
  onChange,
}) => {
  return (
    <div>
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full shadow-small px-2 py-1.5 rounded-sm focus:outline-none focus:border-2 border-blue-600 ${
          errorMsg && "border-2 border-red-600"
        }`}
      />
      <span
        className={`flex items-center gap-2 mt-1 mb-2 text-red-600 ${
          !errorMsg && "hidden"
        }`}
      >
        {errorMsg && <BiErrorCircle size={16} className="mt-1" />}{" "}
        {errorMsg && errorMsg}
      </span>
    </div>
  );
};

export default Input;
