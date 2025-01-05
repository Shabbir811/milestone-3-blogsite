"use client"

import { IComment } from "@/types"
import { ChangeEvent, useState } from "react"



function CommentSection() {
    const [addComment, setAddComment] = useState("")
    const [addAuthorName, setAddAuthorName] = useState("")
    const [showExtra, setShowExtra] = useState(true)
    const [comments, setComments] = useState<IComment[]|[]>(
        () => {
            const getItems = localStorage.getItem("comment")
            if (getItems) {
                return JSON.parse(getItems)
            } else {
                return []
            }
            
        })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (addAuthorName.trim() && addComment.trim()) {
            setComments([...comments,
            {
                authorName: addAuthorName,
                commentContent: addComment,
                showMore:showExtra

            }
            ])
            setAddComment("")
            setAddAuthorName("")
            
        }
    }

    const hadleShowContent = (id:string)=>{
        if(comments.filter(
            (comment:IComment)=>(
                comment.commentContent === id
            )
        )){

            setShowExtra(prev => !prev)
        }
    }

    localStorage.setItem("comment",JSON.stringify(comments))

    return (
        <div className="flex max-w-2xl flex-col  shadow-orange-500 shadow-md rounded-md p-5 mx-10 gap-5">
            <div className="h-24 w-24 rounded-full bg-[#f2f2f2] border-orange-500 border-2"></div>
            <form onSubmit={handleSubmit}
                className="rounded-lg flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col md:flex-row items-center gap-5 ">
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        required
                        value={addAuthorName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setAddAuthorName(e.target.value)}
                        className=" rounded-lg h-16  text-orange-500  px-5 py-2 bg-[#f2f2f2]"
                    />
                    <textarea
                        
                        rows={1}
                        required
                        value={addComment}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAddComment(e.target.value)}
                        placeholder="add a comment..."
                        className="text-black/85 text-base  bg-[#f2f2f2] rounded-md p-5"

                    />
                </div>
                <button
                    className="h-12 w-40 rounded-lg text-white bg-orange-400 border-none uppercase font-semibold hover:bg-orange-500 shadow-md"
                    type="submit"
                >
                    Submit
                </button>
            </form>


            <div className="flex flex-col gap-3">
                {
                    comments.length == 0 ?
                        "No Comments"
                        :

                        <>
                            <div className="flex items-center gap-3 ">
                                <h5 className="text-lg text-black/65 font-medium uppercase">comments :</h5>
                                <p className="font-bold text-orange-400  ">{comments.length}</p>
                            </div>
                            {
                                comments.map(
                                    (comment: IComment, index: number) => (
                                        <div key={index} className="flex flex-col bg-gray-100 gap-3  rounded-lg w-[80%] py-2">
                                            <h6 className="text-black/55 text-sm p-1">@{comment.authorName}</h6>
                                            <p className={`px-5 ${showExtra && "line-clamp-2"} text-black/80`}>
                                                {
                                                    comment.commentContent
                                                }
                                            </p>
                                            <button
                                                onClick={ ()=> hadleShowContent(comment.commentContent)}
                                                className="text-orange-500 hover:text-orange-400 ">
                                                {
                                                    showExtra ?
                                                        <span>Read More &gt;</span>
                                                        :
                                                        <span>Less Show</span>
                                                }

                                            </button>
                                        </div>
                                    )
                                )
                            }
                        </>
                }

            </div>

        </div>
    )
}

export default CommentSection
