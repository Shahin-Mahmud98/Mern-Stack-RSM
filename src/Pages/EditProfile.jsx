import { useLoaderData } from "react-router-dom";

export default function EditProfile() {
  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    // const image_url = form.image_url.value;
    // const email = form.data?.email.value;
    const password = form.password.value;

    const userData = {
      name,
      age,
      password,
      // image_url,
        email: data?.email,
}
console.log(userData)

    fetch(
      `https://web-app-mern-server-db5s.onrender.com/user/${data?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1 className="text-3xl mb-7">Edit Profile </h1>

      <form onSubmit={handleSubmit}  className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User email</label>
          <input
            type="text"
            value={data?.email}
            
            name="email"
            className="py-2 px-1 bg-slate-50 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Age</label>
          <input type="text" name="age" className="py-2 px-1 bg-slate-50 " />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            className="py-2 px-1 bg-slate-50 "
          />
          {/* <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div> */}
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            value="Update Profile"
            className="py-2 px-1 bg-slate-950 text-white "
          />
        </div>
        
      </form>
    </div>
  );
}
