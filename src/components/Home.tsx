import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Focused from "@/components/Focused";

const Home = () => {
  return (
    <main className="text-center">
      <Navbar />
      <Hero />
      <Focused />
    </main>
  );
};

export default Home;
