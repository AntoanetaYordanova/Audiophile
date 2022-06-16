import stylesShared from '../../../sharedCSS/catalog/Catalog.module.css';
import stylesLocal from './EarphonesCatalog.module.css';

import { Link } from 'react-router-dom';
import CatalogMenu from '../../Shared/CatalogMenu/CatalogMenu';
import DescriptionSection from '../../Shared/DescriptionSection/DescriptionSection';

const EarphonesCatalog = () => {
    return (
        <>
            <section className={stylesShared.headerSection}>
                <div className={stylesShared.headerWrapper}>
                    <h2>Earphones</h2>
                </div>
            </section>
            <section className={stylesShared.mainSection}>
                <div
                    className={
                        stylesShared.imageWrapper +
                        ' ' +
                        stylesLocal.imageWrapper
                    }
                >
                    <img
                        className={stylesLocal.earphonesImg}
                        src="/images/shared/desktop/image-category-thumbnail-earphones.png"
                        alt="zx9-speaker-img"
                    />
                </div>
                <section className={stylesShared.description}>
                    <h5>New product</h5>
                    <h2>YX1 wireless earphones</h2>
                    <p>
                        Tailor your listening experience with bespoke dynamic
                        drivers from the new YX1 Wireless Earphones. Enjoy
                        incredible high-fidelity sound even in noisy
                        environments with its active noise cancellation feature.
                    </p>
                    <Link to="/products/earphones">See Product</Link>
                </section>
            </section>
            <div className={stylesShared.wrapper}>
                <CatalogMenu />
            </div>
            <div className={stylesShared.wrapper}>
                <DescriptionSection />
            </div>
        </>
    );
};

export default EarphonesCatalog;
