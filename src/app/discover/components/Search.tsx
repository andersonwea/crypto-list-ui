'use client'

import { Skills } from '@/@types'
import { Heading } from '@/components/Heading'
import { Autocomplete, AutocompleteItem, Chip } from '@nextui-org/react'
import { ChevronsDownUp } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface SearchProps {
  skills: Skills[]
}

export function Search({ skills }: SearchProps) {
  const searchParams = useSearchParams()
  const techs = searchParams.get('techs')?.split(',') || []
  const [search, setSearch] = React.useState<string[]>(techs)

  const router = useRouter()

  function handleAddTech(value: number | string) {
    if (!value) {
      return
    }

    const tech = skills[(value as number) - 1]

    const params = searchParams.get('techs')?.split(',') || []

    params.push(tech.name)

    router.push(`?techs=${params.join(',')}`)

    setSearch([...search, tech.name])
  }

  function handleRemoveTech(techToRemove: string) {
    setSearch(search.filter((tech) => tech !== techToRemove))

    const params = searchParams.get('techs')?.split(',') || []

    const techToRemoveIndex = params.indexOf(techToRemove)

    params.splice(techToRemoveIndex, 1)

    if (params.length === 0) {
      return router.push('/discover')
    }

    router.push(`?techs=${params.join(',')}`)
  }

  const disabledItems: string[] = []

  skills.forEach(
    (skill, index) =>
      search.includes(skill.name) && disabledItems.push((index + 1).toString()),
  )

  return (
    <div className="max-w-[400px] mx-auto mt-14">
      <div className=" text-3xl font-bold block text-center">
        <Heading className="text-3xl">Descobrir</Heading>
        <Autocomplete
          aria-label="Descobrir"
          placeholder="Procure por tecnologias"
          defaultItems={skills}
          className="max-w-md mt-5"
          disableSelectorIconRotation
          size="sm"
          selectorIcon={<ChevronsDownUp size={18} />}
          onSelectionChange={handleAddTech}
          disabledKeys={disabledItems}
        >
          {(item) => (
            <AutocompleteItem key={item.id} value={item.name}>
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
      <div className="flex gap-2 flex-wrap mt-4 min-h-7">
        {search.map((tech, index) => (
          <Chip
            key={tech + index}
            variant="solid"
            color="primary"
            onClose={() => handleRemoveTech(tech)}
          >
            {tech}
          </Chip>
        ))}
      </div>
    </div>
  )
}
