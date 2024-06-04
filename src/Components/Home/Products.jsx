import SingleProduct from "./SingleProduct";


// eslint-disable-next-line react/prop-types
const Products = ({data}) => {
    console.log(data)
    return (
        <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="my-12 flex flex-wrap gap-2 justify-center  ">
        {
            // eslint-disable-next-line react/prop-types
            data.map((property)=>( <SingleProduct key={property.id} property={property}/>))
        }
        </div>
        </div>

    );
};

export default Products;