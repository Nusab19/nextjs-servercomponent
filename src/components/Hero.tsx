import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-200 px-20 py-20">
      <header className="text-4xl font-bold">Welcome to the Hero page!</header>
      <p className="mt-5 font-semibold">
        This is a simple Next.js app for the MRE of{" "}
        <a href="#" className="text-rose-500 underline underline-offset-2">
          this
        </a>{" "}
        example.
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
