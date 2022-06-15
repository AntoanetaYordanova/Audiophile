import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
      <>
       <section className={styles.productsMenu}>
                <section className={styles.productsMenuProduct}>
                    <div className={styles.productImgWrapper}>
                        <img
                            src="./images/shared/desktop/image-category-thumbnail-headphones.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.menuBottomWrapper}>
                        <p>Headhpones</p>
                        <div>
                            <Link to="#">Shop</Link>
                            <img
                                src="./images/shared/desktop/icon-arrow-right.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.productsMenuProduct}>
                    <div className={styles.productImgWrapper}>
                        <img
                            src="./images/shared/desktop/image-category-thumbnail-speakers.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.menuBottomWrapper}>
                        <p>Speakers</p>
                        <div>
                            <Link to="#">Shop</Link>
                            <img
                                src="./images/shared/desktop/icon-arrow-right.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.productsMenuProduct}>
                    <div className={styles.productImgWrapper}>
                        <img
                            src="./images/shared/desktop/image-category-thumbnail-earphones.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.menuBottomWrapper}>
                        <p>Earphones</p>
                        <div>
                            <Link to="#">Shop</Link>
                            <img
                                src="./images/shared/desktop/icon-arrow-right.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </section>
            <section className={styles.zx9SpeakerSection}>
                <section className={styles.zxImgSection}>
                    <div className={styles.zxImgWrapper}>
                        <img
                            src="./images/home/desktop/image-speaker-zx9.png"
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
                        src="./images/home/desktop/image-earphones-yx1.jpg"
                        alt="earphones-img"
                    />
                </div>
                <section className={styles.earphonesSectionContent}>
                    <h4>YX1 earphones</h4>
                    <Link to="#">See Products</Link>
                </section>
            </div>
            <section className={styles.descriptionSection}>
                <section className={styles.descriptionSectionText}>
                    <h2>
                        Bringing you the <span>best</span> audio gear
                    </h2>
                    <p>
                        Located at the heart of New York City, Audiophile is the
                        premier  store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </section>
                <div className={styles.descriptionSectionImg}>
                    <img src="./images/shared/desktop/image-best-gear.jpg" alt="man-listening-music" />
                </div>
            </section></>
    );
};

export default Home;
