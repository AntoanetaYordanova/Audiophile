import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </main>
      <Footer/> */}
      <Routes>
        <Route path="/" element={<HomeLayout/>}/>
      </Routes>
    </div>
  );
}

export default App;
