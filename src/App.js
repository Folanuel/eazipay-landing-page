import Features from "./components/features";
import Footer from "./components/footer";
import Functions from "./components/functions";
import Main from "./components/main";
import { Navbar } from "./components/navbar";
import Reach from "./components/reach";
import Registeration from "./components/registeration";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Features />
      <Functions />
      <Reach />
      <Registeration />
      <Footer />
    </div>
  );
}

export default App;
