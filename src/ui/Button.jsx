export default function Button({
  children,
  color,
  onClick,
  icon,
  mini = false,
}) {
  const colorClassNames = {
    blue: "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:ring-blue-300",
    red: "bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 focus:ring-red-300",
    gray: "bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 focus:ring-gray-300",
    yellow:
      "bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800 focus:ring-yellow-300",
    green:
      "bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 focus:ring-green-300",
    purple:
      "bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 focus:ring-purple-300",
  };
  return (
    <button
      type="button"
      onClick={onClick ? onClick : () => {}}
      className={`${
        icon ? "flex items-center gap-1" : ""
      } transition cursor-pointer text-white focus:outline-none focus:ring-4 rounded-full ${
        mini ? "px-1 py-[2px] text-xs" : "px-5 py-2.5 font-medium text-sm"
      } text-center  ${colorClassNames[color]}`}
    >
      {icon ?? ""} {children}
    </button>
  );
}
