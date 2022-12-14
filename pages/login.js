import { FcGoogle } from "react-icons/fc"
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { auth } from "../utils/firebase";
import {useRouter} from "next/router"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from "react";
import { toast } from 'react-toastify'

export default function Login(){
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    // Google Sign in

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            route.push("/")

            toast.success(`Logged in!`,{
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            console.log("logged in")
        } catch (error) {
            console.log(error)
            
        }
    }



    useEffect(()=>{
        if(user){
            route.push('/');
        }else{
            console.log("login")
        }

    }, [user]);
    return(
    <div className="grid-cols-1">
        <div className="justify-center items-center shadow-xl w-15 md:max-w-2xl mt-20  p-10 text-black rounded-lg bg-neutral-800">
            <h2 className="text-2xl font-medium text-slate-200">Join Now</h2>
            <div>
                <button onClick={GoogleLogin} className="text-slate-200 w-65 font font-medium rounded-lg flex align-middle p-4">
                    <FcGoogle className="text-2xl"/>
                    Sign in with Google
                </button>
            </div>
        </div>
    </div>
        

    )
}