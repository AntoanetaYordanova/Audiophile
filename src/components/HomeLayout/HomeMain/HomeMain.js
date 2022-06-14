import { Link } from 'react-router-dom';
import styles from './HomeMain.module.css';

const HomeMain = () => {
    return (
        <main>
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
        </main>
    );
};

export default HomeMain;
