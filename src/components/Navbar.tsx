import { useState } from 'react';
import { Sun, Moon, X, Menu } from 'lucide-react';

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
          <li className="nav_item"><a href="#trajetoria">Trajetória</a></li>
          <li className="nav_item"><a href="#confianca">Confiança</a></li>
          <li className="nav_item"><a href="#download">Download (App)</a></li>
          <li className="nav_item"><a href="#quem">Quem somos?</a></li>
          <li className="nav_item">
            <button className="theme_toggle" aria-label="Alternar tema" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="sun-icon" size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        <button id="mobile_btn" aria-label="Abrir menu" onClick={() => setMobileOpen(prev => !prev)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div id="mobile_menu" className={mobileOpen ? 'active' : ''}>
        <ul id="mobile_nav_list">
          <li className="nav_item"><a href="#home" onClick={closeMobile}>Home</a></li>
          <li className="nav_item"><a href="#obj" onClick={closeMobile}>Objetivos</a></li>
          <li className="nav_item"><a href="#modo_de_uso" onClick={closeMobile}>Modo de uso</a></li>
          <li className="nav_item"><a href="#trajetoria" onClick={closeMobile}>Trajetória</a></li>
          <li className="nav_item"><a href="#confianca" onClick={closeMobile}>Confiança</a></li>
          <li className="nav_item"><a href="#download" onClick={closeMobile}>Download (App)</a></li>
          <li className="nav_item"><a href="#quem" onClick={closeMobile}>Quem somos?</a></li>
          <li className="nav_item">
            <button className="theme_toggle" aria-label="Alternar tema" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="sun-icon" size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
