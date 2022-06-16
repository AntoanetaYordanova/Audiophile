import { Link } from 'react-router-dom';
import styles from '../../../sharedCSS/catalog/Catalog.module.css';
import CatalogMenu from '../../Shared/CatalogMenu/CatalogMenu';
import DescriptionSection from '../../Shared/DescriptionSection/DescriptionSection';

const HeadphonesCatalog = () => {
    return (
        <>
            <section className={styles.headerSection}>
                <div className={styles.headerWrapper}>
                    <h2>Headphones</h2>
                </div>
            </section>
            <section className={styles.mainSection}>
                <div className={styles.imageWrapper}>
                    <img
                        src="/images/shared/desktop/image-xx99-mark-two-headphones.jpg"
                        alt="xx99-headphones-img"
                    />
                </div>
                <section className={styles.description}>
                    <h5>New product</h5>
                    <h2>XX99 Mark II Headphones</h2>
                    <p>
                        The new XX99 Mark II headphones is the pinnacle of
                        pristine audio. It redefines your premium headphone
                        experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                    </p>
                    <Link to="/products/x99-mark-2">See Product</Link>
                </section>
                <section className={styles.description}>
                    <h2>XX99 Mark I Headphones</h2>
                    <p>
                        As the gold standard for headphones, the classic XX99
                        Mark I offers detailed and accurate audio reproduction
                        for audiophiles, mixing engineers, and music aficionados
                        alike in studios and on the go.
                    </p>
                    <Link to="/products/xx99-mark-1">See product</Link>
                </section>
                <div className={styles.imageWrapper}>
                    <img
                        src="/images/shared/desktop/image-xx99-mark-one-headphones.jpg"
                        alt="mark-two-headphones-img"
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src="/images/shared/desktop/image-xx59-headphones.jpg"
                        alt="xx59-headphones-img"
                    />
                </div>
                <section className={styles.description}>
                    <h2>XX59 Headphones</h2>
                    <p>
                        Enjoy your audio almost anywhere and customize it to
                        your specific tastes with the XX59 headphones. The
                        stylish yet durable versatile wireless headset is a
                        brilliant companion at home or on the move.
                    </p>
                    <Link to="/products/xx59">See product</Link>
                </section>
            </section>
            <div className={styles.wrapper}>
                <CatalogMenu/>
            </div>
            <div className={styles.wrapper}>
                <DescriptionSection/>
            </div>
        </>
    );
};

export default HeadphonesCatalog;
