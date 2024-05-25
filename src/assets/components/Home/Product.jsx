/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import SingleProduct from "../shared/SingleProduct";

const Product = ({ data }) => {
    return (
        <div>
            <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>
            <div className="flex gap-6 pl-20">
                {
                    data.slice(0, 3).map((shoe) =>
                        <SingleProduct key={shoe.id} shoe={shoe}></SingleProduct>

                    )
                }
                {/* <SingleProduct></SingleProduct> */}
            </div>
        </div >
    );
};

export default Product;