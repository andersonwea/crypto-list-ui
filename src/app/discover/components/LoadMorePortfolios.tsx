'use client'

import { Button, Link, Spinner } from '@nextui-org/react'
import { useInView } from 'react-intersection-observer'
import React from 'react'
import { getPortfolios } from '@/actions/portfolio/getPortfolios'
import { ArrowUp } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { PortfolioCard, PortfolioUser } from './PortfolioCard'

let page = 2

export function LoadMorePortfolios() {
  const [isEnded, setIsEnded] = React.useState(false)
  const [portfolios, setPortfolios] = React.useState<PortfolioUser[]>([])
  const { ref, inView } = useInView()

  const searchParams = useSearchParams()

  React.useEffect(() => {
    if (inView) {
      getPortfolios({
        page,
        search: searchParams.get('techs') || '',
      }).then((res) => {
        if (res && res.portfoliosWithUser.length === 0) {
          return setIsEnded(true)
        }

        setPortfolios([...portfolios, ...res.portfoliosWithUser])
        page++
      })
    }
  }, [inView, portfolios])

  return (
    <section>
      <div className="grid grid-cols-3 gap-9 mt-14">
        {portfolios.map((portfolio, index) => (
          <PortfolioCard
            key={portfolio.id}
            portfolio={portfolio}
            index={index}
          />
        ))}
      </div>
      <div className="mx-auto w-12 mt-5" ref={ref}>
        {isEnded ? (
          <Button
            as={Link}
            href="#discover"
            variant="solid"
            color="primary"
            endContent={<ArrowUp />}
            className="my-4 text-base"
          >
            Inicio
          </Button>
        ) : (
          <Spinner color="secondary" />
        )}
      </div>
    </section>
  )
}
