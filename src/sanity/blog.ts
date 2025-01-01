import { defineType,} from "sanity"

export default  defineType({
    name:"blog",
    type:"document",
    title:"Blog",
    fields:[
        {
            name:"name",
            type:"string",
            title: "Blog Title",
            description:"Title Of Blog",
            validation: (Rule) => Rule.required().error("shabbir")
        },
        {
            name:"description",
            type:"text",
            title: "Blog Description",
            validation:(Rule)=> Rule.required().max(500)

        },
        {
            name:"image",
            type:"image",
            title: "Blog Image",
        },
        {
            name:"content",
            type:"array",
            validation:(Rule)=> Rule.required(),
            of:[{type:'block'}]
        },
        {
            name:"author",
            type:"reference",
            title:"Author",
            to:[{
                type:"author"
            }]
              
        }
    ]
})


