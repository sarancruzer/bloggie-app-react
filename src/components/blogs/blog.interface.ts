
  
  export interface IBlog {
    title: string
    caption: string
    content: string
    shortCode: string
    author: Author
    createdAt: string
    blogTags: BlogTag[]
    tag: Tags
  }
  
  export interface Author {
    id: string
    firstName: string
    lastName: string
    email: string
    role: string
  }
  
  export interface BlogTag {
    tags: Tags
  }
  
  export interface Tags {
    tagName: string
  }
  