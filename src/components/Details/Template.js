import styles from './Template.module.css';
import CatalogMenu from '../Shared/CatalogMenu/CatalogMenu';
import DescriptionSection from '../Shared/DescriptionSection/DescriptionSection';

const Template = (props) => {
    const mainPhoto = props.mainPhoto;
    const title = props.title;
    const description = props.desctirpion;
    const price = props.price;
    const features = props.features;
    const inTheBox = props.inTheBox;
    const inTheBoxPrint = inTheBox.map((e, i) => {
        return (
            <div key={i}>
                <p>{e.quantity}x</p>
                <p>{e.title}</p>
            </div>
        );
    });
    const sidePhotoOne = props.sidePhotoOne;
    const sidePhotoTwo = props.sidePhotoTwo;
    const sidePhotoThree = props.sidePhotoThree;
    const mayLikePhotoOne = props.mayLikeOne.image;
    const mayLikePhotoTwo = props.mayLikeTwo.image;
    const mayLikePhotoThree = props.mayLikeThree.image;
    const mayLikeTitleOne = props.mayLikeOne.title;
    const mayLikeTitleTwo = props.mayLikeTwo.title;
    const mayLikeTitleThree = props.mayLikeThree.title;
    return (
        <div className={styles.mainContainer}>
            <button className={styles.goBackBtn}>Go Back</button>
            <div className="flexboxContainer">
                <div className="headerImgWrapper">
                    <img src={mainPhoto} alt="headhpones-img" />
                </div>
                <article className="headerContentWrapper">
                    {props.isNewProduct ? (
                        <h5 className={styles.overline}>new product</h5>
                    ) : null}
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>${price}</p>
                    <div className={styles.numberPicker}>
                        <div id="minus">-</div>
                        <input type="text" id="number" defaultValue="0" />
                        <div id="plus">+</div>
                        <button>Add to cart</button>
                    </div>
                </article>
            </div>
            <div className="flexboxContainer">
                <article>
                    <h3>Features</h3>
                    <p>{features}</p>
                </article>
                <article>
                    <h3>In the box</h3>
                    {inTheBoxPrint}
                </article>
            </div>
            <div className={styles.gallerySection}>
                <div className={styles.galleryImgContainer}>
                    <img src={sidePhotoOne} alt="gallery-img" />
                </div>
                <div className={styles.galleryImgContainer}>
                    <img src={sidePhotoTwo} alt="gallery-img" />
                </div>
                <div className={styles.galleryImgContainer}>
                    <img src={sidePhotoThree} alt="gallery-img" />
                </div>
            </div>
            <h3>You may also like</h3>
            <section className={styles.youMayLikeSection}>
                <div>
                    <div className={styles.imgWrapper}>
                        <img src={mayLikePhotoOne} alt='may-like-img' />
                        <p>{mayLikeTitleOne}</p>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={mayLikePhotoTwo} alt='may-like-img' />
                        <p>{mayLikeTitleTwo}</p>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img src={mayLikePhotoThree} alt='may-like-img' />
                        <p>{mayLikeTitleThree}</p>
                    </div>
                </div>
            </section>
            <CatalogMenu/>
            <DescriptionSection/>
        </div>
    );
};

export default Template;
