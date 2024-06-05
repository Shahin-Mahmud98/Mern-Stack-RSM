import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";

const GoogleLogin = () => {
    const { googleLogin } = useAuth();

    const handleGoogleLogin = async () => {
        try {
            const data = await googleLogin();
            if (data?.user?.email) {
                const userInfo = {
                    email: data.user.email,
                    name: data.user.displayName,
                };

                const response = await fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                });

                const result = await response.json();
                localStorage.setItem("token", result?.token);
            }
        } catch (error) {
            console.error("Error during Google login:", error);
        }
    };

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn w-full flex items-center justify-center gap-2">
                <FcGoogle size={24} />
                <span>Google</span>
            </button>
        </div>
    );
};

export default GoogleLogin;













































































