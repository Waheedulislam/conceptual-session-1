import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Product from "../components/Home/Product";
const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <>
            <Banner />
            <Product data={data}></Product>
        </>
    );
};

export default Home;