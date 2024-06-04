import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 min-h-screen p-12">
        <ul>
          <li className="text-white p-4 text w-full">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className="text-white p-4 text w-full">
            <Link to={"dashboard/all-products"}>All Products</Link>
          </li>
          <li className="text-white p-4 text w-full">
            <Link to={"dashboard/add-products"}>Add Product</Link>
          </li>
          <li className="text-white p-4 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
