import { useLoaderData } from "react-router-dom";

import Banner from "../Components/Home/Banner";
import Products from "../Components/Home/Products";
import BestProperty from "../Components/Home/BestProperty";
import LoanFeatures from "../Components/Home/LoanFeatures";
import About from "./About";




const Home = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <Banner/>
            {/* <SearchBar/> */}
            <Products data={data}/>
            <LoanFeatures/>
            <BestProperty/>
            <About/>
           
        </div>
    );
};

export default Home;
