import Template from './Template';

function XX99MarkI() {
    const title = 'XX99 Mark I Headphones';
    const mainPhoto =
        '/images/product-xx99-mark-one-headphones/desktop/image-product.jpg';
    const description =
        'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.';
    const price = '1,750';
    const features =
        'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.';
    const inTheBox = [
        { title: 'Headphone unit', quantity: '1' },
        { title: 'Replacement earcups', quantity: '2' },
        { title: 'User manual', quantity: '1' },
        { title: '3.5mm 5m audio cable', quantity: '1' },
    ];
    const sidePhotoOne =
        '/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
    const sidePhotoTwo =
        '/images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
    const sidePhotoThree =
        '/images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';
    const mayLikeOne = {
        title: 'XX99 Mark II',
        image: '/images/shared/desktop/image-xx99-mark-two-headphones.jpg',
    };
    const mayLikeTwo = { 
        title: 'XX59', 
        image: '/images/shared/desktop/image-xx59-headphones.jpg' };
    const mayLikeThree = {
        title: 'ZX9 speaker',
        image: '/images/shared/desktop/image-zx9-speaker.jpg',
    };
    return(
        <Template
        title={title}
                mainPhoto={mainPhoto}
                description={description}
                price={price}
                features={features}
                inTheBox={inTheBox}
                sidePhotoOne={sidePhotoOne}
                sidePhotoTwo = {sidePhotoTwo}
                sidePhotoThree = {sidePhotoThree}
                mayLikeOne = {mayLikeOne}
                mayLikeTwo = {mayLikeTwo}
                mayLikeThree = {mayLikeThree}
                isNewProduct = {false}
        />
    )
}

export default XX99MarkI;