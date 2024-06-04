import { useLoaderData } from "react-router-dom";

import Banner from "../Components/Home/Banner";
import Products from "../Components/Home/Products";
import BestProperty from "../Components/Home/BestProperty";




const Home = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <Banner/>
            <Products data={data}/>
            <BestProperty/>
           
        </div>
    );
};

export default Home;
