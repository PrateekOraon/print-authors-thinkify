export interface Author {
    title: string,
      url: string,
      author: string,
      num_comments: number,
      story_id: number | null,
      story_title: string | null,
      story_url: string | null,
      parent_id: number | null,
      created_at: number
}

export interface AuthorsResponse {
    page: number,
    per_page: 10,
    total: number,
    total_pages: number,
    data: Author[]
}