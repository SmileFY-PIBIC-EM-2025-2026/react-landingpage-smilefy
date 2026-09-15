import { useState } from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header>
      <nav id="navbar">
        <div className="logo_group">
          <img id="nav_logo" src="/LogoPNG2.png" alt="Logo SmileFY" />
          <h1 id="nav_titulo">SmileFY</h1>
        </div>

        <ul id="nav_list">
          <li className="nav_item active"><a href="#home">Home</a></li>
          <li className="nav_item"><a href="#obj">Objetivos</a></li>
          <li className="nav_item"><a href="#modo_de_uso">Modo de uso</a></li>
          <li className="nav_item"><a href="#download">Download (App)</a></li>
          <li className="nav_item"><a href="#quem">Quem somos?</a></li>
          <li className="nav_item">
            <button className="theme_toggle" aria-label="Alternar tema" onClick={toggleTheme}>
              <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
            </button>
          </li>
        </ul>

        <button id="mobile_btn" onClick={() => setMobileOpen(prev => !prev)}>
          <i className={mobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>
      </nav>

      <div id="mobile_menu" className={mobileOpen ? 'active' : ''}>
        <ul id="mobile_nav_list">
          <li className="nav_item"><a href="#home" onClick={closeMobile}>Home</a></li>
          <li className="nav_item"><a href="#obj" onClick={closeMobile}>Objetivos</a></li>
          <li className="nav_item"><a href="#modo-de-uso" onClick={closeMobile}>Modo de uso</a></li>
          <li className="nav_item"><a href="#download" onClick={closeMobile}>Download (App)</a></li>
          <li className="nav_item"><a href="#quem" onClick={closeMobile}>Quem somos?</a></li>
          <li className="nav_item">
            <button className="theme_toggle" aria-label="Alternar tema" onClick={toggleTheme}>
              <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
