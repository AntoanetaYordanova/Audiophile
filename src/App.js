import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
    return (
        <div>
          <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
