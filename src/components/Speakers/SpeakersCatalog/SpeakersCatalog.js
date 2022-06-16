import styles from '../../../sharedCSS/catalog/Catalog.module.css';
import { Link } from 'react-router-dom';
import CatalogMenu from '../../Shared/CatalogMenu/CatalogMenu';
import DescriptionSection from '../../Shared/DescriptionSection/DescriptionSection';

const SpeakersCatalog = () => {
    return (
        <>
            <section className={styles.headerSection}>
                <div className={styles.headerWrapper}>
                    <h2>Speakers</h2>
                </div>
            </section>
            <section className={styles.mainSection}>
                <div className={styles.imageWrapper}>
                    <img
                        src="/images/shared/desktop/image-zx9-speaker.jpg"
                        alt="zx9-speaker-img"
                    />
                </div>
                <section className={styles.description}>
                    <h5>New product</h5>
                    <h2>ZX9 speaker</h2>
                    <p>
                        T Upgrade your sound system with the all new ZX9 active
                        speaker. It’s a bookshelf speaker system that offers
                        truly wireless connectivity -- creating new
                        possibilities for more pleasing and practical audio
                        setups.
                    </p>
                    <Link to="/products/zx9-speaker">See Product</Link>
                </section>
                <section className={styles.description}>
                    <h2>ZX7 speaker</h2>
                    <p>
                        Stream high quality sound wirelessly with minimal loss.
                        The ZX7 bookshelf speaker uses high-end audiophile
                        components that represents the top of the line powered
                        speakers for home or studio use.
                    </p>
                    <Link to="/products/zx7-speaker">See product</Link>
                </section>
                <div className={styles.imageWrapper}>
                    <img
                        src="/images/shared/desktop/image-zx7-speaker.jpg"
                        alt="mark-two-headphones-img"
                    />
                </div>
            </section>
            <div className={styles.wrapper}>
                <CatalogMenu />
            </div>
            <div className={styles.wrapper}>
                <DescriptionSection />
            </div>
        </>
    );
};

export default SpeakersCatalog;
