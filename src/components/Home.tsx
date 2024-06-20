"use client";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Focused from "@/components/Focused";

const Home = () => {
  const [focusMode, setFocusMode] = useState(false);

  return (
    <main className="text-center">
      <Navbar setFocusMode={setFocusMode} />
      {!focusMode && <Hero />}
      <Focused focusMode={focusMode} />
    </main>
  );
};

export default Home;
