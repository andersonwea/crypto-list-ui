import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@nextui-org/react'

export function Avatar() {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <User
            as="button"
            name="Anderson"
            description="Desenvolvedor de Software"
            avatarProps={{
              src: 'https://github.com/andersonwea.png',
              isBordered: true,
              color: 'primary',
              showFallback: true,
            }}
          />
        </DropdownTrigger>

        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="gap-2" href="/profile">
            <p className="font-bold">Logado com</p>
            <p className="font-bold">nodamage@live.com</p>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Sair
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
