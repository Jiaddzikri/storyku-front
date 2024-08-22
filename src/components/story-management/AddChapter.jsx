import { useContext, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import Editor from "../Editor";
import InputField from "../InputField";
import { formatDate } from "../../utils/FormatDate";
import { StoryContext } from "../../context/StoryContext";
import {
  NavLink,
  useNavigate,
  useNavigation,
  useRoutes,
} from "react-router-dom";
import { clear } from "@testing-library/user-event/dist/clear";

const AddChapter = ({}) => {
  const { setStoryForm } = useContext(StoryContext);
  const navigate = useNavigate();
  const [chapters, setChapters] = useState({
    title: null,
    currentDate: formatDate(new Date()),
    story: null,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setChapters((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const save = () => {
    setStoryForm((prev) => ({
      ...prev,
      chapters: [...prev.chapters, chapters],
    }));

    clean();
    navigate("/management/add");
  };

  const clean = () => {
    setChapters((prev) => ({
      ...prev,
      title: null,
      currentDate: null,
      story: null,
    }));

    navigate("/management/add");
  };

  return (
    <>
      <header>
        <Breadcrumb />

        <h1 className="mt-3 font-semibold text-3xl">Add Chapter</h1>
        <NavLink to={"/management/add"}>
          <button
            type="button"
            className="text-white bg-slate-500 hover:bg-slate-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center gap-1 mt-2"
          >
            <svg
              className="rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="text-sm">back</span>
          </button>
        </NavLink>
      </header>
      <main className="relative h-[560px] mt-8 px-5 py-3 roundex-xl shadow-md">
        <InputField
          onChange={onChangeHandler}
          name={"title"}
          text={"chapter title"}
        />
        <Editor setState={setChapters} name={"story"} text={"story"} />
      </main>
      <div className="mt-5 flex justify-end">
        <button
          onClick={clean}
          type="button"
          className="rounded-full text-black border-[1px] border-slate-500 bg-white hover:bg-slate-300 font-medium text-sm px-5 py-2.5 me-2 mb-2"
        >
          Cancel
        </button>
        <button
          onClick={save}
          type="button"
          className="text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Save
        </button>
      </div>
    </>
  );
};
export default AddChapter;
