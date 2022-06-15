import styles from './DescriptionSection.module.css';

const DescriptionSection = () => {
    return (
        <section className={styles.descriptionSection}>
                <section className={styles.descriptionSectionText}>
                    <h2>
                        Bringing you the <span>best</span> audio gear
                    </h2>
                    <p>
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </section>
                <div className={styles.descriptionSectionImg}>
                    <img
                        src="./images/shared/desktop/image-best-gear.jpg"
                        alt="man-listening-music"
                    />
                </div>
            </section>
    )
}

export default DescriptionSection;