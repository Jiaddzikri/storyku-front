const TextField = ({ onChange, text, name, value }) => {
  return (
    <div className="mt-3">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {text}
      </label>
      <textarea
        onChange={onChange}
        value={value}
        name={name}
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write the story synopsis"
      ></textarea>
    </div>
  );
};
export default TextField;
