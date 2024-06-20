const Navbar = ({ setFocusMode }) => {
  return (
    <nav className="flex items-center justify-between border-b-2 border-gray-400 px-5 py-5">
      <a className="text-2xl font-bold tracking-tighter" href="/">
        Next.js
      </a>
      <div>
        <a href="/" className="mr-5 underline">
          Home
        </a>
        <button
          className="rounded-md border bg-gray-700 p-2 font-semibold text-gray-100 hover:bg-gray-500"
          onClick={() => setFocusMode((prevIsFocused) => !prevIsFocused)}
        >
          Toggle Focus Button
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
