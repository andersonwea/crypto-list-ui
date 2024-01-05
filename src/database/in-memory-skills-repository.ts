import { Skills } from '@/@types'
import database from '@/database/db.json'

export class InMemorySkillsRepository {
  public items: Skills[] = []

  constructor() {
    this.items = database.skills
  }

  findMany() {
    const skills = this.items

    return skills
  }
}
