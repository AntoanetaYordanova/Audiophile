import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import HeadphonesCatalog from './components/Headphones/HeadphonesCatalog/HeadphonesCatalog';
import styles from './App.module.css';
import SpeakersCatalog from './components/Speakers/SpeakersCatalog/SpeakersCatalog';
import EarphonesCatalog from './components/Earphones/EarphonesCatalog/EarphonesCatalog';
import XX99MarkII from './components/Details/XX99MarkII';
import XX99MarkI from './components/Details/XX99MarkI';

function App() {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="catalog">
                        <Route
                            path="headphones"
                            element={<HeadphonesCatalog />}
                        />
                        <Route path="speakers" element={<SpeakersCatalog />} />
                        <Route
                            path="earphones"
                            element={<EarphonesCatalog />}
                        />
                    </Route>
                    <Route path="products">
                        <Route path="x99-mark-2" element={<XX99MarkII />} />
                        <Route path="xx99-mark-1" element={<XX99MarkI />} />
                        <Route path="xx59" />
                        <Route path="zx9-speaker" />
                        <Route path="zx7-speaker" />
                        <Route path="zx7-earphones" />
                    </Route>
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
