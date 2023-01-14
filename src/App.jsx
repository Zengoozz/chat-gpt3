import { Blog, CTA, Features, Footer, GPTCard, Home, Navbar, Possibility } from "./containers"

function App() {
  return (
    <section className="bg-primaryCustom min-h-[100vh] flex flex-col font-manrope">
      <div className="gradient__bg">
        <div className="mx-[120px] mt-[50px]">
          <Navbar />
          <Home />
        </div>
      </div>
      <div className="mx-[120px]">
        <GPTCard />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
      </div>
      <div className="bg-footerCustom mt-[150px]">
        <div className="mx-[120px] mb-[5px]">
          <Footer />
        </div>
      </div>

    </section>
  );
}

export default App;
