import { Features, GPTCard, Home, Navbar } from "./containers"

function App() {
  return (
    <section className="bg-primaryCustom min-h-[100vh] flex flex-col font-manrope">
      <div className="gradient__bg">
        <div className="mx-[120px] mt-[50px]">
          <Navbar />
          <Home />
        </div>
      </div>
      <div className="mx-[120px] mt-[50px] mb-[20px]">
        <GPTCard />
        <Features />
      </div>

    </section>
  );
}

export default App;
