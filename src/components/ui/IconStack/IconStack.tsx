import type { IconStackTypes } from "./IconStack.types";
import styles from "./IconStack.module.css";

function IconStack({src, variant = "default"}: IconStackTypes) {
    return (
        <div className={`${styles.iconStack} ${styles[`iconStack--${variant}`]}`}>
            <img src={ src } alt="" />
        </div>
    )
}

export default IconStack