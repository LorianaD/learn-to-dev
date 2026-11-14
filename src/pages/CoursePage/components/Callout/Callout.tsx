import InlineText from "../InlineText/InlineText";
import styles from "./Callout.module.css";

interface CalloutTypes {
    variant: "tip" | "warning";
    content: string;
}

const labels = {
    tip: "Astuce",
    warning: "Attention",
};

// Encadré vert « Astuce » ou orange « Attention »
function Callout({ variant, content }: CalloutTypes) {
    return (
        <div className={`${styles.callout} ${styles[variant]}`}>
            <strong className={styles.calloutLabel}>
                {labels[variant]}
            </strong>
            <p>
                <InlineText text={content} />
            </p>
        </div>
    )
}

export default Callout
