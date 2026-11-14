// Button.tsx
import type { ButtonTypes } from "./Button.types";
import styles from "./Button.module.css";

function Button({ label, type = "button", variant = "primary", active = false, onClick }: ButtonTypes) {
    const className = [
        styles.button,
        styles[variant],
        active && styles.active,
    ].filter(Boolean).join(" ");

    return (
        <button type={type} className={className} onClick={onClick} aria-pressed={active}>
            {label}
        </button>
    )
}

export default Button