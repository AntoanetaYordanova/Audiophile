import { useLocation, Link } from 'react-router-dom';
import homeHeaderStyles from './HomeHeaderStyles/HomeHeader.module.css';
import generalHeaderStyles from './GeneralHeaderStyles/GeneralHeader.module.css';

const Header = () => {
    const homeHeader = (
        <header>
            <div className={homeHeaderStyles.headerWrapper}>
                <div className={homeHeaderStyles.navWrapper}>
                    <section className={homeHeaderStyles.logo}>
                        <img
                            src="./images/shared/desktop/logo.svg"
                            alt="audiophile-logo"
                        />
                    </section>
                    <nav>
                        <ul className={homeHeaderStyles.nav}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/headphones">Headphones</Link>
                            </li>
                            <li>
                                <Link to="speakers">Speakers</Link>
                            </li>
                            <li>
                                <Link to="earphones">Earphones</Link>
                            </li>
                        </ul>
                    </nav>
                    <section className={homeHeaderStyles.cart}>
                        <img
                            src="./images/shared/desktop/icon-cart.svg"
                            alt="cart-img"
                        />
                    </section>
                </div>
                <section className={homeHeaderStyles.heroSection}>
                    <section className={homeHeaderStyles.heroSectionContent}>
                        <p className={homeHeaderStyles.overline}>New Product</p>
                        <h1>
                            XX99 Mark II <br /> Headphones
                        </h1>
                        <p className={homeHeaderStyles.text}>
                            Experience natural, lifelike audio and exceptional{' '}
                            <br />
                            build quality made for the passionate music <br />
                            enthusiast.
                        </p>
                        <div className={homeHeaderStyles.btnWrapper}>
                            <Link to="/products/xx99mark2">See Product</Link>
                        </div>
                    </section>
                </section>
            </div>
        </header>
    );

    const generalHeader = (
        <header className={generalHeaderStyles.generalHeader}>
            <div className={generalHeaderStyles.headerWrapper}>
                <section className={generalHeaderStyles.logo}>
                    <img
                        src="./images/shared/desktop/logo.svg"
                        alt="audiophile-logo"
                    />
                </section>
                <nav>
                    <ul className={generalHeaderStyles.nav}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/headphones">Headphones</Link>
                        </li>
                        <li>
                            <Link to="speakers">Speakers</Link>
                        </li>
                        <li>
                            <Link to="earphones">Earphones</Link>
                        </li>
                    </ul>
                </nav>
                <section className={generalHeaderStyles.cart}>
                    <img
                        src="./images/shared/desktop/icon-cart.svg"
                        alt="cart-img"
                    />
                </section>
            </div>
        </header>
    );

    const location = useLocation();

    if (location.pathname === '/') {
        return homeHeader;
    } else {
        return generalHeader;
    }
};

export default Header;
