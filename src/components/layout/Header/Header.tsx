import { NavLink } from "react-router";
import styles from './Header.module.css';
import { headerData } from "./Header.data";
import HeaderNav from "./HeaderNav";

function Header() {
    const { logo, nav } = headerData;
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.logo}>
                <img src={logo} alt="logo" />
            </NavLink>

            <div className={styles.nav}>
                <HeaderNav nav={nav}/>
            </div>
        </header>
    )
}

export default Header;