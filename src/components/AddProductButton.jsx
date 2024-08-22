import { NavLink } from "react-router-dom";

const AddProductButton = ({ setComponent }) => {
  return (
    <NavLink to={"/management/add"}>
      <button
        type="button"
        className="focus:outline-none text-white bg-black hover:bg-slate-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Add Product
      </button>
    </NavLink>
  );
};
export default AddProductButton;
