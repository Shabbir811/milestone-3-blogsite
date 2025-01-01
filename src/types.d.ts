import { StaticImageData } from "next/image";

export interface Iblog {
    name: string,
    description: string,
    _id:string,
    image:StaticImageData
  }
export interface IblogDetails {
    name: string,
    description: string,
    _id:string,
    image:StaticImageData,
    content:[],
    author:{
      name:string,
      bio:string,
      authorImage:StaticImageData
    }
  }

  export interface IComment{
    authorName:string,
    commentContent:string,
    showMore:boolean

  }