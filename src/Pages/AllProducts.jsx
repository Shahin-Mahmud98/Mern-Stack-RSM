
import { useEffect, useState } from "react";

import SinglePropertyCardDashboard from "../Components/dashboard/SinglePropertyCardDashboard";


const AllProducts = () => {
    const [protertys,setProtertys] = useState([]);

    useEffect(()=>{
        fetch("https://web-app-mern-server.vercel.app/properties/")
        .then((res) => res.json())
        .then((data )=> setProtertys(data));
    },[]);

    const handleDelete = (id) => {
        setProtertys(protertys.filter(property => property._id !==id));
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">All Products</h1>
            <div className="my-12 flex flex-wrap gap-2">

               
            {
                // eslint-disable-next-line no-undef
                protertys.map(property => <SinglePropertyCardDashboard key={property.id} property={property} onDelete={handleDelete}
                />)
            }
            </div>
        </div>
    );
};

export default AllProducts;