import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
    // hi
    const shoe = useLoaderData();

    console.log(shoe)

    const handleSubmit = async (e) => {


        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;
        // console.log(id)
        const data = { id, title, brand, price, description, image_url };
        console.log(data)

        await fetch('http://localhost:3000/Shoes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                form.reset();
            })
    }

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Edit a product</h1>
            <div className="my-16 text-center">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <input className="bg-gray-100 p-2 w-50 border-black rounded-lg " type="text" name='title' placeholder="Title" />
                    </div>
                    <div className="mt-2">
                        <input className="bg-gray-100 p-2 w-50 border-black rounded-lg " type="text" name='brand' placeholder="Brand" />
                    </div>
                    <div className="mt-2">
                        <input className="bg-gray-100 p-2 w-50 border-black rounded-lg " type="number" name='price' placeholder="Price" />
                    </div>
                    <div className="mt-2">
                        <input className="bg-gray-100 p-2 w-50 border-black rounded-lg " type="text" name='description' placeholder="description" />
                    </div>
                    <div className="mt-2">
                        <input className="bg-gray-100 p-2 w-50 border-black rounded-lg " type="text" name='image_url' placeholder="Image_Url" />
                    </div>
                    <div className="mt-2">
                        <input className="bg-gray-100 p-2 w-50 border-black rounded-lg " type="text" name='id' placeholder="Id" />
                    </div>
                    <div className="mt-2 flex justify-center items-center">
                        <input className="btn mt-4 w=3/4 bg-primary p-4 text-white" type="submit" value='Add Product' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;