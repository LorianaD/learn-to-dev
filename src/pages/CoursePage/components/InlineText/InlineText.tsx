import styles from "./InlineText.module.css";

interface InlineTextTypes {
    text: string;
}

// Recognizes inline code, bold, italic and Markdown links.
const markdownRegex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*\n]+\*|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g;

function InlineText({ text }: InlineTextTypes) {
    const parts = text.split(markdownRegex);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith("`") && part.endsWith("`")) {
                    return <code key={index} className={styles.inlineCode}>{part.slice(1, -1)}</code>;
                }

                if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={index}>{part.slice(2, -2)}</strong>;
                }

                if (part.startsWith("*") && part.endsWith("*")) {
                    return <em key={index}>{part.slice(1, -1)}</em>;
                }

                const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
                if (link) {
                    return (
                        <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">
                            {link[1]}
                        </a>
                    );
                }

                return part;
            })}
        </>
    );
}

export default InlineText;