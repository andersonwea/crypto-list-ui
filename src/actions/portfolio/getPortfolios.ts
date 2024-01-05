'use server'

import { InMemoryPortfoliosRepository } from '@/database/in-memory-portfolios-repository'
import { InMemoryUsersRepository } from '@/database/in-memory-users-repository'

interface GetPortfoliosProps {
  search?: string
  page: number
}

export async function getPortfolios({ search, page }: GetPortfoliosProps) {
  const inMemoryPortfoliosRepository = new InMemoryPortfoliosRepository()
  const inMemoryUsersRepository = new InMemoryUsersRepository()

  const portfolios = inMemoryPortfoliosRepository.findMany(page)

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
