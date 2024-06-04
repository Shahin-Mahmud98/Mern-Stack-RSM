import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SingleProduct = ({property}) => {

    
    // eslint-disable-next-line react/prop-types
    const { id,title, price, description,address, image_url } = property;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="properties" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h3 className="text-xl font-semibold">{address}</h3>
          <h3 className="text-xl font-semibold">{price}</h3>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/products/${id}`}>See details</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;