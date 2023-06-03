import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Series from "./components/Series";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Featured />
        <Movies />
        <Series />
      </main>
    </>
  );
}
