import { FaAtlassian } from "react-icons/fa";

const Privacy = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="flex items-center gap-2 mt-4 text-2xl font-semibold text-slate-600">
        <FaAtlassian size={20} />
        Atlassian
      </span>
      <span className="text-xs">
        One account for Trello, Jira, Confluence and more.
      </span>
      <span className="text-xs flex justify-center">
        Privacy Policy • User Notice
      </span>
    </div>
  );
};

export default Privacy;
