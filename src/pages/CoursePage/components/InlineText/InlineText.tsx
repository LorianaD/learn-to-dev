import styles from "./InlineText.module.css";

interface InlineTextTypes {
    text: string;
}

// Transforme "utilise `useState` ici" en : utilise <code>useState</code> ici
function InlineText({ text }: InlineTextTypes) {
    // split avec un backtick : les morceaux impairs (1, 3, 5…) étaient entre backticks
    const parts = text.split("`");

    return (
        <>
            {parts.map((part, index) =>
                index % 2 === 1
                    ? <code key={index} className={styles.inlineCode}>{part}</code>
                    : part
            )}
        </>
    )
}

export default InlineText
