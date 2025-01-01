import { type SchemaTypeDefinition } from 'sanity'
import blog from '@/sanity/blog'
import author from '@/sanity/author'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blog,
    author
  ],
}
