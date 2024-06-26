import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user} = useAuth();

    // console.log(user?.email)


    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        if (user?.email) {
            fetch(`https://web-app-mern-server-db5s.onrender.com/user/${user?.email}`)
                .then((res) => res.json())
                .then((data) => setUserInfo(data))
                
        }
    }, [user]);

    // console.log(userInfo);
    return (
        <div>
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl ">Profile Information</h1>
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-neutral btn-md"
        >
          Edit Profile
        </Link>
      </div>
      <div>
        <h1>{userInfo?.name}</h1>
        <h1>{userInfo?.email}</h1>
        {/* <h1>{userInfo?.password}</h1>
        <h1>{userInfo?.age}</h1>
        <img src={userInfo?.image_url} alt="" /> */}
      </div>
    </div>
    );
};

export default Dashboard;
