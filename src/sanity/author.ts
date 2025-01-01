const author ={
    name: "author",
    type:"document",
    title:"Author",
    fields:[
    {
        name:"name",
        type:'string',
        title:"Name",
    },
    {
        name:"bio",
        type:"text",
        title:"Bio"
    },
    {
        name: "authorImage",
        type:"image",
        title:"Author Image",
        options:{
            hotspot:true
        }
    },
    ]


}

export default author