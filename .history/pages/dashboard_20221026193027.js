import { auth } from "../utils/firebase";




export default function Dashboard(){
    return(
        <div>
            <h1>Your Posts</h1>
            <div>Posts</div>
            <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )

}