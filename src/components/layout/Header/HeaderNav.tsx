// HeaderNav.tsx
import { useState } from 'react';
import { NavLink } from 'react-router';
import styles from './Header.module.css';
import type { HeaderNavProps } from '../../../types';

function HeaderNav({ nav }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav} aria-label="Navigation principale">
            <button
                type="button"
                className={styles.burger}
                aria-expanded={isOpen}
                aria-controls="main-menu"
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span className={styles.burgerBar} />
                <span className={styles.burgerBar} />
                <span className={styles.burgerBar} />
            </button>

            <ul id="main-menu" className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}>
                {nav.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            end={item.to === '/'}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default HeaderNav;