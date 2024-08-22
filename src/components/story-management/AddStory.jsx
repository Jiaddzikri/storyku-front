import { useContext, useEffect, useRef, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import FileInput from "../FileInput";
import InputButtonField from "../InputButtonField";
import InputField from "../InputField";
import SelectInput from "../SelectInput";
import Table from "../Table";
import Tags from "../Tags";
import TextField from "../TextField";
import { getCategories, postStory } from "../../api/api";
import { StoryContext } from "../../context/StoryContext";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import { formData } from "../../utils/formData";
import { formatDate } from "../../utils/FormatDate";
import OptionButton from "../OptionButton";

const AddStory = ({}) => {
  const { storyForm, setStoryForm } = useContext(StoryContext);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const keywordRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();

  const storyFormChangeHandler = (e) => {
    const { name, value, files } = e.target;
    setStoryForm((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      };
    });
  };

  const keywordClickHandler = () => {
    const { value } = keywordRef.current;
    setStoryForm((prev) => ({
      ...prev,
      ["keywords"]: [...prev["keywords"], value.trim()],
    }));
    keywordRef.current.value = "";
  };

  const clean = () => {
    setStoryForm((prev) => ({
      ...prev,
      title: "",
      author: "",
      category: "",
      synopsis: "",
      keywords: [],
      cover_image: "",
      status: "",
      chapters: [],
    }));
  };

  const save = async () => {
    try {
      const response = await postStory(storyForm);

      if (response.status === 201) navigation("/management/show");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await getCategories();
        setCategories(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} setOpen={setIsOpen} text={"Apakah anda yakin?"}>
        <div className="flex gap-3 justify-center items-center py-5">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Cancel
          </button>
          <button
            onClick={clean}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Default
          </button>
        </div>
      </Modal>
      <header>
        <h1 className="mt-3 font-semibold text-3xl">Add Stories</h1>
        <NavLink to="/management/show">
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
      <main className="mt-8 px-5 py-3 roundex-xl shadow-md">
        <div className="flex gap-3">
          <div className="w-[50%]">
            <InputField
              onChange={storyFormChangeHandler}
              text={"Title"}
              name={"title"}
              value={storyForm.title}
            />
          </div>
          <div className="w-[50%]">
            <InputField
              onChange={storyFormChangeHandler}
              text={"author"}
              name={"author"}
              value={storyForm.author}
            />
          </div>
        </div>
        <TextField
          onChange={storyFormChangeHandler}
          text={"synopsis"}
          name={"synopsis"}
          value={storyForm.synopsis}
        />
        <div className="flex gap-3">
          <div className="w-[50%]">
            <SelectInput
              onChange={storyFormChangeHandler}
              name={"category"}
              text={"Category"}
              value={storyForm.category}
            >
              <option defaultValue={""}>choose</option>
              {isLoading
                ? ""
                : categories.map((category, key) => (
                    <option key={key} value={category.id}>
                      {category.name}
                    </option>
                  ))}
            </SelectInput>
          </div>
          <div className="w-[50%]">
            <InputButtonField
              onClick={keywordClickHandler}
              elRef={keywordRef}
              text={`Tags/Keyword Story`}
              name={"keyword"}
            />
            {storyForm.keywords.length > 0 ? (
              <div className="flex gap-3 flex-wrap mt-3">
                {storyForm.keywords.map((keyword, index) => (
                  <Tags
                    key={index}
                    position={index}
                    data={storyForm.keywords}
                    setData={setStoryForm}
                    text={keyword}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[50%]">
            <FileInput
              onChange={storyFormChangeHandler}
              name={"cover_image"}
              text={"Cover Image"}
              value={storyForm.cover_image}
            />
          </div>
          <div className="w-[50%]">
            <SelectInput
              onChange={storyFormChangeHandler}
              name={"status"}
              text={"Status"}
              value={storyForm.status}
            >
              <option defaultValue={""}>choose status</option>
              <option value="draft">Draft</option>
              <option value="publish">Publish</option>
            </SelectInput>
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <NavLink to={"/management/add-chapter"}>
            <button
              type="button"
              className="text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Chapter
            </button>
          </NavLink>
        </div>
        {storyForm.chapters.length > 0 ? (
          <div className="mt-5">
            <Table columns={["title", "currentDate"]} rows={storyForm.chapters}>
              {storyForm.chapters.map((chapter, key) => (
                <tr
                  key={key}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{chapter.title}</td>
                  <td className="px-6 py-4">{formatDate(new Date())}</td>
                </tr>
              ))}
            </Table>
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-end gap-2 mt-5">
          <button
            onClick={() => setIsOpen(true)}
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
      </main>
    </>
  );
};
export default AddStory;
