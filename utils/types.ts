export type Data = {
    posts: Post [],
    categories: Category []
  }
  export type Post = { 
    id: string,
    slug: string,
    title: string,
    excerpt: string,
    imageUrl: string,
    categories: string[]
  }
  export type Category = {
    id: number,
    name: string,
    slug: string
  }

  export type PaginationButtonsType = {
    prevPage: () => void,
    currentPage: number,
    nextPage: () => void,
    posts: Post[],
    itemsPerPage: number,
  };