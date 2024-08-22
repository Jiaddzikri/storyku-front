import { useState } from "react";

const OptionButton = ({ action }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button className="group relative text-gray-600 hover:text-gray-700 focus:outline-none">
      <div className="w-[24] h-max *:mx-8 bg-white border-1 shadow-md border-slate-300 hidden absolute group-hover:block z-30">
        <button
          onClick={action[0].handler}
          value={action[0].param}
          className="w-24 py-2  hover:bg-slate-300 border-1 border-slate-100"
        >
          {action[0].action}
        </button>
        <button
          onClick={action[0].handler}
          value={action[0].param}
          className="w-24 py-2 hover:bg-slate-300 border-1 border-slate-100"
        >
          {action[1].action}
        </button>
      </div>
      <svg
        className="w-8 h-8 rotate-90"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v.01M12 12v.01M12 18v.01"
        ></path>
      </svg>
    </button>
  );
};
export default OptionButton;
