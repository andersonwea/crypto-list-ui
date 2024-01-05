import { Portfolio } from '@/@types'
import database from '@/database/db.json'

export class InMemoryPortfoliosRepository {
  public items: Portfolio[] = []

  constructor() {
    this.items = database.portfolios
  }

  findMany(page: number) {
    const portfolios = this.items.slice((page - 1) * 6, page * 6)

    return portfolios
  }

  findManyByUserId(userId: string) {
    const portfolios = this.items.filter(
      (portfolio) => portfolio.userId === userId,
    )

    return portfolios
  }
}
