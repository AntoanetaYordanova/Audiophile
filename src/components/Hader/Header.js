import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className={styles.headerWrapper}>
                <section className={styles.logo}>
                    <img
                        src="./images/shared/desktop/logo.svg"
                        alt="audiophile-logo"
                    />
                </section>
                <nav>
                    <ul className={styles.nav}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/headphones">Headphones</Link></li>
                        <li><Link to="speakers">Speakers</Link></li>
                        <li><Link to="earphones">Earphones</Link></li>
                    </ul>
                </nav>
                <section className="cart">
                    <img src="./images/shared/desktop/icon-cart.svg" alt="" />
                </section>
            </div>
        </header>
    );
};

export default Header;
