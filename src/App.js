import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Middle from "./components/Middle/Middle";
import Results from "./components/Results/Results";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-[#0B0F19]">
        <Header />
        <div className="absolute top-51px left-[18px] bg-linear opacity-[0.35] blur-[150px] transform -rotate-[7.48] w-[619px] h-[619px]" />
        <Title />
      </div>

      <Middle />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
