
// import { client } from "@/sanity/lib/client";
// import { Iblog } from "@/types";
import ShowMoreBtn from "./ShowMoreBtn";







async function Posts({title}:{title:string}) {
    // const query = `*[_type == "blog"] | order(_createdAt asc){
    //     description,image,name,_id
    //     }`;

    // const post: Iblog[] = await client.fetch(query)

    const url = await fetch("https://milestone-3-blogsite.vercel.app/api/post",{
        cache:"no-store"
    })

    const post = await url.json()

    return (

        <main className="flex min-h-screen flex-col my-12">
            <h1 className="text-2xl  font-bold uppercase my-12 text-center">
                {title}
            </h1>
            <section >
                
                <ShowMoreBtn post={post} />
            </section>
        </main>
    )
}

export default Posts
