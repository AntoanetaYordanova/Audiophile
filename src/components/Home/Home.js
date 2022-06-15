import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import CatalogMenu from '../Shared/CatalogMenu/CatalogMenu';
import DescriptionSection from '../Shared/DescriptionSection/DescriptionSection';

const Home = () => {
    return (
        <>
            <CatalogMenu/>
            <section className={styles.zx9SpeakerSection}>
                <section className={styles.zxImgSection}>
                    <div className={styles.zxImgWrapper}>
                        <img
                            src="/images/home/desktop/image-speaker-zx9.png"
                            alt="x9-speaker-img"
                        />
                    </div>
                </section>
                <section className={styles.zx9SpeakerSectionContent}>
                    <h1>
                        ZX9 <br /> speaker
                    </h1>
                    <p>
                        Upgrade to premium speakers that are <br /> phenomenally
                        built to deliver truly remarkable <br /> sound.
                    </p>
                    <Link to="#">See product</Link>
                </section>
            </section>
            <div className={styles.speakerHover}></div>
            <div className={styles.gridWrapper}>
                <section className={styles.zx7Speakers}>
                    <section className={styles.zx7SpeakersContent}>
                        <h4>ZX7 speaker</h4>
                        <Link to="#">See Product</Link>
                    </section>
                </section>
                <div className={styles.imageWrapper}>
                    <img
                        src="/images/home/desktop/image-earphones-yx1.jpg"
                        alt="earphones-img"
                    />
                </div>
                <section className={styles.earphonesSectionContent}>
                    <h4>YX1 earphones</h4>
                    <Link to="#">See Products</Link>
                </section>
            </div>
            <DescriptionSection/>
        </>
    );
};

export default Home;
