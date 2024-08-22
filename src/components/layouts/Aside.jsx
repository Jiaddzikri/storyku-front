import { Link } from "react-router-dom";
import ListItem from "../ListItems";

const Aside = () => {
  return (
    <aside className="w-64 h-screen bg-white z-30 py-4 shadow-md shadow-slate-300">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">
          <a href="">Storyku</a>
        </h1>
      </div>
      <div className="flex items-center flex-col">
        <ul className="text-[.8rem] mt-5 text-slate-500">
          <Link to="/">
            <ListItem name={`Dashboard`} />
          </Link>
          <Link to="/story-management">
            <ListItem name={`Story Management`} />
          </Link>
        </ul>
      </div>
    </aside>
  );
};
export default Aside;
