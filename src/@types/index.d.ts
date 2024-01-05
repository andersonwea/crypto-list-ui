export type User = {
  id: string
  name: string
  lastName: string
  avatarUrl: string
  title: string
  jobLevel: string
}

export type Portfolio = {
  id: string
  userId: string
  published: boolean
  likes: number
  visited: number
}

export type Skills = {
  id: string
  name: string
}
