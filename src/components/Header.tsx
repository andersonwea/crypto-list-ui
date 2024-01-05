'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
} from '@nextui-org/react'
import { Logo } from './Logo'
import React from 'react'
import { UserRound } from 'lucide-react'
import { Avatar } from './Avatar'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    {
      title: 'Descobrir',
      href: '/discorver',
    },
    {
      title: 'dashboard',
      href: '/me/dashboard',
    },
    {
      title: 'contato',
      href: '/contact',
    },
    {
      title: 'FAQ',
      href: '/faq',
    },
  ]

  const session = true

  return (
    <Navbar shouldHideOnScroll maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden"
          style={{ color: 'gray' }}
        />

        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="max-md:hidden flex gap-8">
        <NavbarItem>
          <Link color="foreground" href="/discover">
            Descobrir
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/me/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contato
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {session ? (
          <NavbarItem>
            <Avatar />
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="max-md:hidden">
              <Button
                as={Link}
                href="/login"
                variant="bordered"
                color="primary"
                size="sm"
                startContent={<UserRound />}
                className="font-semibold text-lg"
              >
                Logar
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                href="/sign-up"
                className="font-semibold text-lg text-white"
                variant="solid"
                size="sm"
                color="primary"
              >
                Criar conta
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarItem key={item.title}>
            <Link
              color="foreground"
              href={item.href}
              className="w-full"
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Link size="lg" color="foreground" href="/login" className="w-full">
            Login
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  )
}
