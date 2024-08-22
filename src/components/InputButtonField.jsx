const InputButtonField = ({ onClick, elRef, text, name }) => {
  return (
    <div className="mt-3">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {text}
      </label>
      <div className="relative">
        <input
          ref={elRef}
          name={name}
          type="search"
          className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder={text}
          required
        />
        <button
          onClick={onClick}
          type="submit"
          className="text-white absolute right-2 top-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Tag
        </button>
      </div>
    </div>
  );
};
export default InputButtonField;
