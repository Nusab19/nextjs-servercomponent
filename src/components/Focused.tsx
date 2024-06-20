const Focused = ({ focusMode }: { focusMode: boolean }) => {
  return (
    <div className="bg-purple-300 py-20">
      <header className="text-4xl font-bold">
        I&apos;m {!focusMode && "not"} Focused!
      </header>
      <p className="mt-5 font-mono">
        Focus Mode: <strong>{focusMode ? "On" : "Off"}</strong>
      </p>
    </div>
  );
};

export default Focused;
