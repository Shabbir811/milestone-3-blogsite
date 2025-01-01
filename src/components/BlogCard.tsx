import Image from 'next/image'
import Link from 'next/link'
import { Iblog } from '@/types'
import { urlFor } from '@/sanity/lib/image'
import { LuChevronRight } from "react-icons/lu";

const BlogCard = ({ blog }: { blog: Iblog }) => {
    
    
    return (
        <section className='flex flex-col justify-between h-[480px] rounded bg-white/90 hover:scale-105 hover:bg-orange-200 '>
            <div className='relative max-h-72 flex-1 '>
                <Image
                    src={`${urlFor(blog.image)}`}
                    alt='blog image'
                    fill
                    className='object-cover rounded-t'
                />
            </div>
            <div className="flex flex-col justify-between gap-y-4 p-4  ">
                <h2 className="text-lg text-orange-500 font-semibold line-clamp-2  ">
                    {blog.name}
                </h2>
                <p className="text-black/70 line-clamp-3 ">
                    {blog.description}
                </p>

                <Link href={`/blog/${blog._id}`}
                    className=' px-4 py-1 text-center text-orange-500 no-underline uppercase flex justify-center items-center text-2xl'
                >
                    <span>read more</span>
                    <LuChevronRight className='text-3xl' />
                </Link>
            </div>

        </section>
    )
}

export default BlogCard
