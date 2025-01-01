import { PortableTextComponents } from "@portabletext/react";

export  const StyleTextComponent:PortableTextComponents ={
    block:{
        h1:({children})=><h1 className="text-7xl text-pretty text-purple-500/80 font-extrabold uppercase py-7">{children}</h1>,
        h2:({children})=><h2 className="text-5xl text-pretty text-justify text-purple-500 font-bold uppercase py-6">{children}</h2>,
        h3:({children})=><h3 className="text-4xl text-purple-500 font-semibold uppercase py-5">{children}</h3>,
        h4:({children})=><h4 className="text-3xl text-purple-500 font-medium uppercase py-4">{children}</h4>,
        h5:({children})=><h5 className="text-lg text-purple-500 font-medium uppercase py-3">{children}</h5>,
        h6:({children})=><h6 className="text-base text-purple-500 font-normal uppercase py-3">{children}</h6>,
        blockquote:({children})=><blockquote className="text-black/80 text-lg">{children}</blockquote>,
        link:({children})=><link className="text-orange-500 text-lg">{children}</link>,
        
    },
    listItem:{
        bullet:({children})=><li className="list-disc marker:text-yellow-600">{children}</li>
    }

}