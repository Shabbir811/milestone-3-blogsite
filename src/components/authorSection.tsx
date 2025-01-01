import { urlFor } from '@/sanity/lib/image'
import { IblogDetails } from '@/types'
import Image from 'next/image'


function AuthorSection({blog}:{blog:IblogDetails[]}) {
    return (
        <div className='px-2 sm:px-8 md:px-12 flex gap-4 sm:gap-6 items-center  flex-col sm:flex-row justify-start shadow-orange-600 shadow-md '>
            <Image
                src={urlFor(blog[0].author.authorImage).url()}
                alt='author image'
                width={200}
                height={200}
                className='object-cover rounded-full h-24 w-24 shadow-orange-500 shadow-md'
            />
            <hr className='h-[150px] my-5 bg-orange-700 w-[2px] items-center hidden sm:block ' />
            <div className="flex flex-col items-center gap-3 py-2">
                <h3 className="text-xl font-bold text-orange-500">{blog[0].author.name}</h3>
                <p className="italic text-sm sm:text-base ">{blog[0].author.bio}</p>
            </div>

        </div>
    )
}

export default AuthorSection
