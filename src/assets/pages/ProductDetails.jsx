import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();

    const { brand, description, image_url, price, title } = shoe;
    console.log(shoe)
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">{title}</h1>
            <img className="h-[600px]" src={image_url} alt="product image" />
            <h3 className="text-2xl font-semibold">{price} $$</h3>
            <h3 className="text-xl font-semibold">{brand} $$</h3>
            <p className="text-xl font-light">{description}</p>

        </div>
    );
};

export default ProductDetails;