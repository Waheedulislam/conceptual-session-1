/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleCardProductDashboard = ({ shoe, onDelete }) => {
    console.log(shoe)
    const { id, title, brand, price, description } = shoe;

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/Shoes/${id}`, {
            method: 'DELETE'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                onDelete(id);
            })

    }
    return (
        <div>
            <div className="card w-4/5 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="text-xl font-semibold">{id}</h3>
                    <h3 className="text-xl font-semibold">{brand}</h3>
                    <h3 className="text-xl font-semibold">{price}</h3>

                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn btn-primary">
                            <Link to={`/products/${id}`}>See Details</Link>
                            {/* <Link to={'products'}>See Details</Link> */}
                        </button>
                        <button className="btn btn-success">
                            <Link to={`edit/${id}`}>Edit</Link>
                            {/* <Link to={'products'}>See Details</Link> */}
                        </button>
                        <button onClick={handleDelete} className="btn btn-error">Delete
                            {/* <Link to={'products'}>See Details</Link> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCardProductDashboard;