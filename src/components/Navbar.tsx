const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b-2 border-gray-400 px-5 py-5">
      <p className="text-xl font-bold tracking-tighter">Next.js</p>
      <div>
        <a href="/" className="mr-5 underline">
          Home
        </a>
        <button className="rounded-md border bg-gray-700 p-2 font-semibold text-gray-100 hover:bg-gray-500">
          Focus Button
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
