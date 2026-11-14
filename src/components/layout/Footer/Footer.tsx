import { footerData } from "./Footer.data";
import styles from './Footer.module.css';

function Footer() {
    const { brand } = footerData;

    return (
        <footer className={styles.footer}>
            <span className={styles.footer__brand}>
                {brand}
            </span>
        </footer>
    )
}

export default Footer;