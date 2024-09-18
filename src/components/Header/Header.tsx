import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'

export default function Header() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className='font-bold text-inherit'>FILM IU</p>
      </NavbarBrand>
      <NavbarContent className='sm:flex gap-4' justify='start'>
        <NavbarItem>
          <Link href='#'>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color='foreground' href='#' aria-current='page'>
            Series y Películas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Directores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Productoras
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Generos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Tipos
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  )
}