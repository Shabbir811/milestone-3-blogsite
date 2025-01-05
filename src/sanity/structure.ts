import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Post'),
      S.documentTypeListItem('author').title('Author'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post','author'].includes(item.getId()!),
      ),
    ])
