import Template from './Template';

const XX99MarkII = () => {
    const title = 'xx99 mark II headphones';
    const mainPhoto =
        '/images/product-xx99-mark-two-headphones/desktop/image-product.jpg';
    const description =
        ' The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.';
    const price = '2,999';
    const features =
        'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.';
    const inTheBox = [
        { title: 'Headphone unit', quantity: '1' },
        { title: 'Replacement earcups', quantity: '2' },
        { title: 'User manual', quantity: '1' },
        { title: '3.5mm 5m audio cable', quantity: '1' },
        { title: 'Travel bag', quantity: '1' },
    ];
    const sidePhotoOne =
        '/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
    const sidePhotoTwo =
        '/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
    const sidePhotoThree =
        '/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';
    const mayLikeOne = {
        title: 'XX99 Mark I',
        image: '/images/shared/desktop/image-xx99-mark-one-headphones.jpg',
    };
    const mayLikeTwo = { 
        title: 'XX59', 
        image: '/images/shared/desktop/image-xx59-headphones.jpg' };
    const mayLikeThree = {
        title: 'ZX9 speaker',
        image: '/images/shared/desktop/image-zx9-speaker.jpg',
    };

    return (
        <>
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
                isNewProduct = {true}
            />
        </>
    );
};

export default XX99MarkII;
