"use client"
import { Iblog } from "@/types";
import { useState } from "react";
import BlogCard from "./BlogCard";


function ShowMoreBtn({ post }: { post: Iblog[] }) {
    const [showMore, setShowMore] = useState(false);

    const blogs = post.slice(0, 3)


    return (
        <div className="flex flex-col items-center gap-16">


            <div className="wraper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                {
                    showMore ?
                        post.map(
                            (blog) => (
                                <div key={blog._id}>
                                    <BlogCard blog={blog} />
                                </div>
                            )
                        )
                        :
                        blogs.map(
                            (blog) => (
                                <div key={blog._id}>
                                    <BlogCard blog={blog} />
                                </div>
                            )
                        )



                }

            </div>
            <div>
                { post.length > 3 && 
                <button
                    className="h-12 w-40 rounded-lg text-white bg-orange-500 uppercase font-semibold hover:scale-105 shadow-md"
                    onClick={() => setShowMore(prev => !prev)}
                >
                    {

                        showMore ?
                            'less show'
                            :
                            'show more'
                    }
                </button>
            }

            </div>
        </div>
    )
}

export default ShowMoreBtn
