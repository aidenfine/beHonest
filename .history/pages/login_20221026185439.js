import { FcGoogle } from "react-icons/fc"
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { auth } from "../utils/firebase";



export default function Login(){

    // Google Sign in

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            
        } catch (error) {
            
        }
    }
    return(
        <div className="shadow-xl mt-32 p-10 text-black rounded-lg bg-white">
            <h2 className="text-2xl font-medium">Join Now</h2>
            <div>
                <h3 className="py-4">Sign in</h3>
                <button className="text-white bg-gray-700 w-full font font-medium rounded-lg flex align-middle p-4">
                    <FcGoogle className="text-2xl"/>
                    Sign in Google
                </button>
            </div>
        </div>

    )
}