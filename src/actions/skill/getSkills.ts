'use server'

import { InMemorySkillsRepository } from '@/database/in-memory-skills-repository'

export async function getSkills() {
  const inMemorySkillsRepository = new InMemorySkillsRepository()

  const skills = inMemorySkillsRepository.findMany()

  return {
    skills,
  }
}
