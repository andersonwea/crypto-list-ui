'use server'

import { InMemoryPortfoliosRepository } from '@/database/in-memory-portfolios-repository'
import { InMemoryUsersRepository } from '@/database/in-memory-users-repository'

export async function getUserPortfolios() {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const inMemoryPortfoliosRepository = new InMemoryPortfoliosRepository()

  const portfolios = inMemoryPortfoliosRepository.findManyByUserId('1')

  const portfoliosWithUser = portfolios.map((portfolio) => {
    const user = inMemoryUsersRepository.findById(portfolio.userId)

    if (!user) {
      throw new Error('user not found')
    }

    const portfolioUser = {
      ...portfolio,
      user,
    }
    return portfolioUser
  })

  return {
    portfoliosWithUser,
  }
}
