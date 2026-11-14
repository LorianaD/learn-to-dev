import { useState } from "react";
import styles from "./CodeBlock.module.css";

interface CodeBlockTypes {
    code: string;
    file?: string;
}

function CodeBlock({ code, file }: CodeBlockTypes) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        // Le bouton repasse à « Copier » après 2 secondes
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <figure className={styles.codeBlock}>
            <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockFile}>
                    {file ?? ""}
                </span>
                <button type="button" className={styles.codeBlockCopy} onClick={handleCopy}>
                    {copied ? "Copié !" : "Copier"}
                </button>
            </div>

            <pre className={styles.codeBlockCode}>
                <code>{code}</code>
            </pre>
        </figure>
    )
}

export default CodeBlock
