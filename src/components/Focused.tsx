const Focused = ({ isFocused }: { isFocused: boolean }) => {
  return (
    <div className="my-10">
      <header className="text-4xl font-bold">
        I&apos;m {!isFocused && "not"} Focused!
      </header>
      <p className="mt-5 font-mono">
        Focus Mode: <strong>{isFocused ? "On" : "Off"}</strong>
      </p>
    </div>
  );
};

export default Focused;
