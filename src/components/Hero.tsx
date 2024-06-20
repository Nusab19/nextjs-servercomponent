const Hero = () => {
  return (
    <div className="bg-blue-200 px-20 py-20">
      <header className="text-4xl font-bold">Welcome to the Hero page!</header>
      <p className="mt-5 font-semibold">
        This is a simple Next.js app for the MRE for{" "}
        <a
          href="https://stackoverflow.com/questions/78649530/how-to-pass-a-state-from-child-to-parent-component-in-next-js"
          className="text-rose-500 underline underline-offset-2"
        >
          this
        </a>
        <br />
        <br />
        Author:{" "}
        <a
          href="https://nusab19.pages.dev"
          className="text-blue-600 underline underline-offset-2"
          target="_blank"
        >
          Nusab Taha
        </a>
      </p>
    </div>
  );
};

export default Hero;
