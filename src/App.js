import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
