import { getUserPortfolios } from '@/actions/portfolio/getUserPortfolios'
import { PortfolioCard } from '@/app/discover/components/PortfolioCard'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Button, Card, CardBody } from '@nextui-org/react'
import { Plus } from 'lucide-react'

export default async function Dashboard() {
  const { portfoliosWithUser } = await getUserPortfolios()

  return (
    <main>
      <Heading className="text-3xl text-center mt-14">Dashboard</Heading>

      <div className="mt-14 grid grid-cols-3 gap-9">
        {portfoliosWithUser.map((portfolio, index) => (
          <PortfolioCard
            key={portfolio.id}
            index={index}
            portfolio={portfolio}
          />
        ))}

        <Card className="bg-slate-50">
          <CardBody className="flex justify-center items-center gap-2">
            <Button isIconOnly radius="full" color="primary" size="lg">
              <Plus />
            </Button>
            <Text as="p">Criar novo portfolio</Text>
          </CardBody>
        </Card>
      </div>
    </main>
  )
}
