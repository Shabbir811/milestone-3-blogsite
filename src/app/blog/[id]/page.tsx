import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { IblogDetails } from '@/types'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { StyleTextComponent } from '@/components/StyleTextComponent'
import Posts from '@/components/Posts'
import AuthorSection from '@/components/authorSection'
import CommentSection from '@/components/CommentSection'


export const revalidate = 10;

async function DynamicBlog({ params: { id } }: { params: { id: string } }) {
    const query = `
    *[_type=="blog" && _id=="${id}"]{
        name,image,content,description,_id,
        author -> {name,bio,authorImage}
        }
        `
    const blog: IblogDetails[] = await client.fetch(query)

    return (

        <>
            <article className='mt-12 mb-24 px-4 2xl:px-12 flex flex-col gap-y-8'>
                {/* blog title */}
                <h1 className='text-xl lg:text-5xl font-bold text-black'>
                    {blog[0].name}
                </h1>
                {/* blog image */}
                <Image
                    src={`${urlFor(blog[0].image)}`}
                    alt='blog image'
                    width={500}
                    height={500}
                    className='rounded'
                />
                {/* blog content section */}
                <section>
                    <h2 className='text-2xl md:text-3xl font-bold uppercase text-purple-600 '>
                        description :
                    </h2>
                    <p className="text-base md:text-xl leading-relaxed text-justify">
                        {blog[0].description}
                    </p>

                </section>
                {/* author section */}
                <section className='flex justify-start'>
                    <AuthorSection blog={blog} />
                </section>

                {/* main content */}
                <section className="text-lg leading-normal text-black ">
                    <PortableText value={blog[0].content} components={StyleTextComponent} />
                </section>

            </article>
            {/* comment section */}
            <CommentSection />

            <Posts title='Most Recent blogs' />


        </>
    )
}

export default DynamicBlog
