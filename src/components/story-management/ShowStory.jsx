import { useEffect, useState } from "react";
import AddProductButton from "../AddProductButton";
import FilterButton from "../FilterButton";
import SearchInput from "../SearchInput";
import Table from "../Table";
import { getStories } from "../../api/api";
import OptionButton from "../OptionButton";
import Modal from "../Modal";

const ShowStory = ({onDelete, onUpdate}) => {
  const [stories, setStories] = useState([]);
  const [isGetStoriesLoading, setGetStoriesLoading] = useState(false);

  const deleteStory = (e) => {
    const {value} = e.target;
  }
  console.log(stories);
  useEffect(() => {
    const loadStories = async () => {
      setGetStoriesLoading(true);
      try {
        const response = await getStories();
        setStories(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setGetStoriesLoading(false);
      }
    };
    loadStories();
  }, []);
  return (
    <>
    <Modal>

    </Modal>
      <header className="flex justify-between items-center">
        <div>
          <SearchInput setLoading={setGetStoriesLoading} setStories={setStories}  />
        </div>
        <div className="flex items-center gap-3">
          <FilterButton />
          <AddProductButton />
        </div>
      </header>
      <div className="mt-5">
        {isGetStoriesLoading ? (
          ""
        ) : (
          <Table columns={["No", "title", "author", "category", "keyword", "status"]}>
            {stories.map((story, key) => (
              <tr
                key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{key + 1}</td>
                <td className="px-6 py-4">{story.title}</td>
                <td className="px-6 py-4">{story.author}</td>
                <td className="px-6 py-4">{story.categories.name}</td>
                <td className="px-6 py-4">
                  {story.keywords.map((keyword) => keyword.name + ",")}
                </td>
                <td className="px-6 py-4">{story.status}</td>
                <td><OptionButton action={[
                  {
                    action: "delete",
                    handler : deleteStory,
                    param: story.id
                  },
                  {
                    action: "updated",
                    handler: onUpdate,
                    param: story.id
                  }
                ]} /></td>
              </tr>
            ))}
          </Table>
        )}
      </div>
    </>
  );
};
export default ShowStory;
