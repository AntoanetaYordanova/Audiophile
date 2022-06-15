import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import HeadphonesCatalog from './components/Headphones/HeadphonesCatalog/HeadphonesCatalog';
import styles from './App.module.css';

function App() {
    return (
        <div>
          <Header/>
            <main className={styles.main}>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="catalog">
                        <Route path='headphones' element={<HeadphonesCatalog/>}/>
                    </Route>
                    <Route path='products'>
                        <Route path='x99-mark-2'/>
                        <Route path='xx99-mark-1'/>
                        <Route path='xx59'/>
                    </Route>
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
