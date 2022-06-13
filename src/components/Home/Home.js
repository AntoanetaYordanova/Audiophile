import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.heroSectionWrapper}>
                    <section className={styles.heroSectionContent}>
                        <p className={styles.overline}>New Product</p>
                        <h1>XX99 Mark II Headphones</h1>
                        <p>
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </p>
                        <Link to="/products/xx99mark2">See Product</Link>
                    </section>
                    {/* <section className={styles.heroSectionImg}>
                        <img src="./images/home/desktop/image-hero.jpg" alt="headphones-img" />
                    </section> */}
                </div>
            </section>
        </>
    );
};

export default Home;
