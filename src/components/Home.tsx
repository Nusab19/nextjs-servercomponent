"use client";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Focused from "@/components/Focused";

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <main className="text-center">
      <Navbar setIsFocused={setIsFocused} />
      {isFocused ? (
        <Focused isFocused={isFocused} />
      ) : (
        <>
          <Hero />
          <Focused isFocused={isFocused} />
        </>
      )}
    </main>
  );
};

export default Home;
