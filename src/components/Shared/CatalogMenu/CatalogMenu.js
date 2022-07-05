import styles from './CatalogMenu.module.css';
import { Link } from 'react-router-dom';

const CatalogMenu = () => {
    return (
        <section className={styles.productsMenu}>
                <section className={styles.productsMenuProduct}>
                    <div className={styles.productImgWrapper}>
                        <img
                            src="/images/shared/desktop/image-category-thumbnail-headphones.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.menuBottomWrapper}>
                        <p>Headhpones</p>
                        <div>
                            <Link to="/catalog/headphones">Shop</Link>
                            <img
                                src="/images/shared/desktop/icon-arrow-right.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.productsMenuProduct}>
                    <div className={styles.productImgWrapper}>
                        <img
                            src="/images/shared/desktop/image-category-thumbnail-speakers.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.menuBottomWrapper}>
                        <p>Speakers</p>
                        <div>
                            <Link to="/catalog/speakers">Shop</Link>
                            <img
                                src="/images/shared/desktop/icon-arrow-right.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.productsMenuProduct}>
                    <div className={styles.productImgWrapper}>
                        <img
                            src="/images/shared/desktop/image-category-thumbnail-earphones.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.menuBottomWrapper}>
                        <p>Earphones</p>
                        <div>
                            <Link to="/catalog/earphones">Shop</Link>
                            <img
                                src="/images/shared/desktop/icon-arrow-right.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </section>
    )
}


export default CatalogMenu;