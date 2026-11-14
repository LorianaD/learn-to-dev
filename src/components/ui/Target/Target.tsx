import styles from './Target.module.css';
import type { TargetMeta } from "./Target.types";

function Target({text, variant}: TargetMeta) {
    return (
        <div className={`${styles.target} ${styles[`target--${variant}`]}`}>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Target