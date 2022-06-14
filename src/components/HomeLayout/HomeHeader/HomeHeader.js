import { Link } from 'react-router-dom';
import styles from './HomeHeader.module.css'

const HomeHeader = () => {
    return (
        <header>
            <div className={styles.headerWrapper}>
            <div className={styles.navWrapper}>
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
                <section className={styles.cart}>
                    <img src="./images/shared/desktop/icon-cart.svg" alt="cart-img" />
                </section>
            </div>
            <section className={styles.heroSection}>
                    <section className={styles.heroSectionContent}>
                        <p className={styles.overline}>New Product</p>
                        <h1>XX99 Mark II <br/> Headphones</h1>
                        <p className={styles.text}>
                            Experience natural, lifelike audio and exceptional <br/>
                            build quality made for the passionate music <br/>
                            enthusiast.
                        </p>
                        <div className={styles.btnWrapper}>
                            <Link to="/products/xx99mark2">See Product</Link>
                        </div>
                    </section>
            </section>
            </div>
        </header>
    );
};

export default HomeHeader;
