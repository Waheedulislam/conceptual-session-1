/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import SingleCardProductDashboard from "../components/DashBoard/SingleCardProductDashboard";

const AllProducts = () => {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Shoes')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    const handleDeleteProduct = () => {
        setProducts(Products.filter((product) => product.id !== id))
    }
    return (
        <div>

            <h1 className="text-5xl font-bold text-center">All Products</h1>
            <div className="my-16 grid lg:grid-cols-3 gap-10 pl-16 ">{
                Products.map(shoe =>
                    <SingleCardProductDashboard key={shoe.id} shoe={shoe} onDelete={handleDeleteProduct} />
                )
            }</div>
        </div>
    );
};

export default AllProducts;