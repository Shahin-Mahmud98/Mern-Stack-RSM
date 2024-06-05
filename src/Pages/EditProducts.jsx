import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const property = useLoaderData();

  console.log(property);

  
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState(property.title)
  // eslint-disable-next-line no-unused-vars
  const [price, setPrice] = useState(property.price)
  // eslint-disable-next-line no-unused-vars
  const [address, setAddress] = useState(property.address)
  // eslint-disable-next-line no-unused-vars
  // const [id, setId] = useState(property.id)
  // eslint-disable-next-line no-unused-vars
  const [description, setDescription] = useState(property.description)
  // eslint-disable-next-line no-unused-vars
  const [image_url, setImageURL] = useState(property.image_url)

  // // eslint-disable-next-line no-unused-vars
  // const [title,setTitle] = useState(property.title);
  // // eslint-disable-next-line no-unused-vars
  // const [address,setAddress] = useState(property.address);


  // eslint-disable-next-line no-unused-vars
  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token')
    e.preventDefault();

    const form = e.target;
    // const id = form.id.value;
    const address = form.address.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, address, price, description, image_url };

    console.log(data)

    await fetch(`https://web-app-mern-server-db5s.onrender.com/properties/${property._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization : `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => 
        toast.success("ProPerty Updated"));
  };
    return (
      <div>
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          {/* <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div> */}
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              value="Edit Product"
            />
          </div>
        </form>
      </div>
    </div>
    );
};

export default EditProducts;