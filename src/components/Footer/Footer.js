import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerWrapper}>
                <section className={styles.leftSection}>
                    <div className={styles.logoWrapper}>
                        <img
                            src="./images/shared/desktop/logo.svg"
                            alt="logo-img"
                        />
                    </div>
                    <p className={styles.footerText}>
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We're a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we’re open 7 days a week.
                    </p>
                    <p className={styles.copyright}>
                        Copyright &copy; 2021. All Rights Reserved
                    </p>
                </section>
                <section className={styles.rightSection}>
                    <ul className={styles.menu}>
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
                    <ul className={styles.socialLinks}>
                        <li>
                            <a href="#">
                                <img
                                    src="/images/shared/desktop/icon-facebook.svg"
                                    alt="facebook-icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/images/shared/desktop/icon-twitter.svg"
                                    alt="twitter-icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/images/shared/desktop/icon-instagram.svg"
                                    alt="instagram-icon"
                                />
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
