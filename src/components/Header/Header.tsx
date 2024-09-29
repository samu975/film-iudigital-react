import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  NavbarMenu,
} from '@nextui-org/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import LogoFilmIUDigital from '../icons/LogoFilmIUDigital'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const location = useLocation();
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
        <LogoFilmIUDigital />
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
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: pathName === '/' ? 'primary' : 'inherit',
                  }}
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
                  <DropdownItem key="filmList">
                    <Link
                      to="/film/list"
                      style={{
                        textDecoration: 'none',
                        color:
                          pathName === '/film/list' ? 'primary' : 'inherit',
                      }}
                    >
                      Listado de películas
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="filmForm">
                    <Link
                      to="/film/form"
                      style={{
                        textDecoration: 'none',
                        color:
                          pathName === '/film/form' ? 'primary' : 'inherit',
                      }}
                    >
                      Agregar películas
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavbarItem key="directorList">
                <Link
                  to="/director/list"
                  style={{
                    textDecoration: 'none',
                    color:
                      pathName === '/director/form' ? 'primary' : 'inherit',
                  }}
                >
                  Listado de directores
                </Link>
              </NavbarItem>
              <NavbarItem key="producerList">
                <Link
                  to="/producer/list"
                  style={{
                    textDecoration: 'none',
                    color:
                      pathName === '/producer/list' ? 'primary' : 'inherit',
                  }}
                >
                  Listado de productoras
                </Link>
              </NavbarItem>
              <NavbarItem>
                <NavbarItem key="genreList">
                  <Link
                    to="/genre/list"
                    style={{
                      textDecoration: 'none',
                      color: pathName === '/genre/list' ? 'primary' : 'inherit',
                    }}
                  >
                    Listado de géneros
                  </Link>
                </NavbarItem>
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
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
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
                  <DropdownItem key="filmList">
                    <Link
                      to="/film/list"
                      style={{
                        textDecoration: 'none',
                        color:
                          pathName === '/film/list' ? 'primary' : 'inherit',
                      }}
                    >
                      Listado de películas
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="filmForm">
                    <Link
                      to="/film/form"
                      style={{
                        textDecoration: 'none',
                        color:
                          pathName === '/film/form' ? 'primary' : 'inherit',
                      }}
                    >
                      Agregar películas
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavbarItem key="directorList">
                <Link
                  to="/director/list"
                  style={{
                    textDecoration: 'none',
                    color:
                      pathName === '/director/list' ? 'primary' : 'inherit',
                  }}
                >
                  Listado de directores
                </Link>
              </NavbarItem>

              <NavbarItem key="producerList">
                <Link
                  to="/producer/list"
                  style={{
                    textDecoration: 'none',
                    color:
                      pathName === '/producer/list' ? 'primary' : 'inherit',
                  }}
                >
                  Listado de productoras
                </Link>
              </NavbarItem>

              <NavbarItem>
                <NavbarItem key="genreList">
                  <Link
                    to="/genre/list"
                    style={{
                      textDecoration: 'none',
                      color: pathName === '/genre/list' ? 'primary' : 'inherit',
                    }}
                  >
                    Listado de géneros
                  </Link>
                </NavbarItem>
              </NavbarItem>
            </NavbarMenu>
          </Navbar>
        )}
      </Navbar>
    </>
  );
}
