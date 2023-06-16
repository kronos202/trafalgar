import Article from "./components/article/Article";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Header from "./components/headers/Header";
import Hero from "./components/hero/Hero";
import Review from "./components/review/Review";
import Service from "./components/services/Service";

function App() {
  return (
    <div className="app max-w-[1600px] mx-auto font-mulish">
      <Header />
      <Hero />
      <Service />
      <Feature />
      <Review />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
