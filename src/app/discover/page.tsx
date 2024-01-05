import { getPortfolios } from '@/actions/portfolio/getPortfolios'
import { LoadMorePortfolios } from './components/LoadMorePortfolios'
import { Search } from './components/Search'
import { getSkills } from '@/actions/skill/getSkills'
import { PortfolioCard } from './components/PortfolioCard'

interface DiscorverProps {
  searchParams: {
    techs: string
  }
}

export default async function Discover({ searchParams }: DiscorverProps) {
  const page = 1

  const { portfoliosWithUser } = await getPortfolios({ page })
  const { skills } = await getSkills()

  return (
    <main id="discover">
      <Search skills={skills} />

      <section className="grid grid-cols-3 gap-9 mt-14">
        {portfoliosWithUser.map((portfolio, index) => (
          <PortfolioCard
            key={portfolio.id}
            portfolio={portfolio}
            index={index}
          />
        ))}
      </section>
      <LoadMorePortfolios />
    </main>
  )
}
