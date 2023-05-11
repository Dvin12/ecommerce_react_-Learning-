import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-4 w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md hover:border-blue-400 duration-300"
        >
          <FcGoogle className="text-4xl"></FcGoogle>
          <span>Sign in With Google</span>
        </button>
        <button className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-600 duration-300">
          Sign Out
        </button>
      </div>

      <div className="w-full flex items-center justify-center gap-10">
        <button className="flex items-center justify-center gap-4 w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md hover:border-blue-400 duration-300">
          <FaGithub className="text-4xl"></FaGithub>
          <span>Sign in With GitHub</span>
        </button>
        <button className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-600 duration-300">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Login;
