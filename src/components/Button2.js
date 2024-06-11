export function Example({
    placeholder,
}) {
  return (
<div className="fixed top-20 left-60 p-3 m-3">
  <button className="flex items-center gap-3 bg-gray-600 text-white hover:opacity-75 font-bold text-lg px-4 py-2 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
      />
    </svg>
    {placeholder}
  </button>
</div>

  );
}

export default Example;