import Comment from "./components/Comment";
import Deals from "./components/Deals";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="max-w-[1440px] min-h-[100vh] mx-auto">
          <Header/>
          <Main/>
          <Deals/>
          <Detail/>
          <Comment/>
          <Footer/>
    </div>
  );
}

export default App;
