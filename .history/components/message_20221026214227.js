import { children } from "cheerio/lib/api/traversing";


export default function Message(children){
    return(
    <div className="bg-white p-8 border-b-2 rounded-lg">
        <div>
            <img src="" />
            <h2>user</h2>
        </div>
        <div>
            <p>description</p>
        </div>
        {children}
    </div>
    )

}