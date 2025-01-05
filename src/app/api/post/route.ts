
import { client } from "@/sanity/lib/client";
import { Iblog } from "@/types";
import { NextResponse } from "next/server";


const query = `*[_type == "blog"] | order(_createdAt asc){
        description,image,name,_id
        }`;

        
        
        
export async function GET (){
            
    const post: Iblog[] = await client.fetch(query)
     
    return NextResponse.json(post)

}























// const users = [
//     {
//         name:"shabbir",
//         age:20,
//         class:"a"
//     },
//     {
//         name:"abbas",
//         age:18,
//         class:"u"
//     },
//     {
//         name:"rehaan",
//         age:34,
//         class:"s"
//     },
// ]

// export function GET() {
//     return NextResponse.json(users)
        
// }


// export async function POST (request:NextRequest){
//     const body = await request.json()
//     users.push(body)
//     return NextResponse.json(body);

// }