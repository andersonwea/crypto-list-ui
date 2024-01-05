import { User } from '@/@types'
import database from '@/database/db.json'

export class InMemoryUsersRepository {
  public items: User[] = []

  constructor() {
    this.items = database.users
  }

  findMany() {
    const users = this.items

    return users
  }

  findById(id: string) {
    const user = this.items.find((user) => user.id === id)

    if (!user) {
      return null
    }

    return user
  }
}
