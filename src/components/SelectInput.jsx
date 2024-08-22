const SelectInput = ({ children, onChange, name, text, value }) => {
  return (
    <div className="mt-3">
      <label
        htmlFor={text}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {text}
      </label>
      <select
        value={value}
        onChange={onChange}
        id={text}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {children}
      </select>
    </div>
  );
};
export default SelectInput;
