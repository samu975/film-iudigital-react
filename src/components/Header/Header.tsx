import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  NavbarMenu,
} from '@nextui-org/react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const pathName = location.pathname;
  const flechaAbajoIcono = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="24px"
        height="24px"
      >
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
      </svg>
    );
  };

  const Brand = (position: string = 'start') => {
    return (
      <NavbarBrand
        className={`font-bold text-inherit text-xl justify-${position}`}
      >
        <p className="">FILM IU</p>
      </NavbarBrand>
    );
  };

  const DropDownButton = (text: string, key: string) => {
    return (
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent"
            radius="sm"
            variant="light"
            endContent={flechaAbajoIcono()}
            color={pathName.includes(`/${key}`) ? 'primary' : 'default'}
          >
            {text}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
    );
  };

  return (
    <>
      <Navbar isBordered>
        {!isMobile ? (
          <>
            {Brand()}
            <NavbarContent className="gap-6" justify="end">
              <NavbarItem>
                <Link
                  href="/"
                  color={pathName === '/' ? 'primary' : 'foreground'}
                >
                  Inicio
                </Link>
              </NavbarItem>
              <Dropdown className="dark text-white">
                {DropDownButton('Películas', 'film')}
                <DropdownMenu
                  variant="light"
                  color="primary"
                  aria-label="Peliculas feautures"
                  className="w-auto text-left"
                >
                  <DropdownItem
                    key="filmList"
                    href="/film/list"
                    className={pathName === '/film/list' ? 'text-primary' : ''}
                  >
                    Listado de películas
                  </DropdownItem>
                  <DropdownItem
                    key="filmForm"
                    href="/film/form"
                    className={pathName === '/film/form' ? 'text-primary' : ''}
                  >
                    Agregar películas
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown className="dark text-white">
                {DropDownButton('Directores', 'directors')}
                <DropdownMenu
                  variant="light"
                  color="primary"
                  aria-label="Peliculas feautures"
                  className="w-auto text-left"
                >
                  <DropdownItem
                    key="filmList"
                    href="/director/list"
                    className={
                      pathName === '/director/list' ? 'text-primary' : ''
                    }
                  >
                    Listado de directores
                  </DropdownItem>
                  <DropdownItem
                    key="filmForm"
                    href="/director/form"
                    className={
                      pathName === '/director/form' ? 'text-primary' : ''
                    }
                  >
                    Agregar director
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown className="dark text-white">
                {DropDownButton('Productoras', 'producer')}
                <DropdownMenu
                  variant="light"
                  color="primary"
                  aria-label="Peliculas feautures"
                  className="w-auto text-left"
                >
                  <DropdownItem
                    key="filmList"
                    href="/producer/list"
                    className={
                      pathName === '/producer/list' ? 'text-primary' : ''
                    }
                  >
                    Listado de productora
                  </DropdownItem>
                  <DropdownItem
                    key="filmForm"
                    href="/producer/form"
                    className={
                      pathName === '/producer/form' ? 'text-primary' : ''
                    }
                  >
                    Agregar productora
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavbarItem>
                <Dropdown className="dark text-white">
                  {DropDownButton('Géneros', 'genre')}
                  <DropdownMenu
                    variant="light"
                    color="primary"
                    aria-label="Peliculas feautures"
                    className="w-auto text-left"
                  >
                    <DropdownSection>
                      <DropdownItem
                        key="filmList"
                        href="/genre/list"
                        className={
                          pathName === '/genre/list' ? 'text-primary' : ''
                        }
                      >
                        Listado de géneros
                      </DropdownItem>
                      <DropdownItem
                        key="filmForm"
                        href="/genre/form"
                        className={
                          pathName === '/genre/form' ? 'text-primary' : ''
                        }
                      >
                        Agregar género
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            </NavbarContent>
          </>
        ) : (
          <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              ></NavbarMenuToggle>
              {Brand('end')}
            </NavbarContent>
            <NavbarMenu className="dark">
              <NavbarItem>
                <Link
                  href="/"
                  color={pathName === '/' ? 'primary' : 'foreground'}
                >
                  Inicio
                </Link>
              </NavbarItem>
              <Dropdown className="dark text-white">
                {DropDownButton('Películas', 'film')}
                <DropdownMenu
                  variant="light"
                  color="primary"
                  aria-label="Peliculas feautures"
                  className="w-auto text-left"
                >
                  <DropdownItem
                    key="filmList"
                    href="/film/list"
                    className={pathName === '/film/list' ? 'text-primary' : ''}
                  >
                    Listado de películas
                  </DropdownItem>
                  <DropdownItem
                    key="filmForm"
                    href="/film/form"
                    className={pathName === '/film/form' ? 'text-primary' : ''}
                  >
                    Agregar películas
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown className="dark text-white">
                {DropDownButton('Directores', 'directors')}
                <DropdownMenu
                  variant="light"
                  color="primary"
                  aria-label="Peliculas feautures"
                  className="w-auto text-left"
                >
                  <DropdownItem
                    key="filmList"
                    href="/director/list"
                    className={
                      pathName === '/director/list' ? 'text-primary' : ''
                    }
                  >
                    Listado de directores
                  </DropdownItem>
                  <DropdownItem
                    key="filmForm"
                    href="/director/form"
                    className={
                      pathName === '/director/form' ? 'text-primary' : ''
                    }
                  >
                    Agregar director
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown className="dark text-white">
                {DropDownButton('Productoras', 'producer')}
                <DropdownMenu
                  variant="light"
                  color="primary"
                  aria-label="Peliculas feautures"
                  className="w-auto text-left"
                >
                  <DropdownItem
                    key="filmList"
                    href="/producer/list"
                    className={
                      pathName === '/producer/list' ? 'text-primary' : ''
                    }
                  >
                    Listado de productora
                  </DropdownItem>
                  <DropdownItem
                    key="filmForm"
                    href="/producer/form"
                    className={
                      pathName === '/producer/form' ? 'text-primary' : ''
                    }
                  >
                    Agregar productora
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavbarItem>
                <Dropdown className="dark text-white">
                  {DropDownButton('Géneros', 'genre')}
                  <DropdownMenu
                    variant="light"
                    color="primary"
                    aria-label="Peliculas feautures"
                    className="w-auto text-left"
                  >
                    <DropdownSection>
                      <DropdownItem
                        key="filmList"
                        href="/genre/list"
                        className={
                          pathName === '/genre/list' ? 'text-primary' : ''
                        }
                      >
                        Listado de géneros
                      </DropdownItem>
                      <DropdownItem
                        key="filmForm"
                        href="/genre/form"
                        className={
                          pathName === '/genre/form' ? 'text-primary' : ''
                        }
                      >
                        Agregar género
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            </NavbarMenu>
          </Navbar>
        )}
      </Navbar>
    </>
  );
}
