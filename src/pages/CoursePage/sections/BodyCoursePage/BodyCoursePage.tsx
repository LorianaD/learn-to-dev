import { Callout, CodeBlock, InlineText } from "../../components";
import type { CourseBlock } from "../../../../types/course";
import styles from "./BodyCoursePage.module.css";
import type { BodyCoursePageTypes } from "./BodyCoursePage.types";

// Chaque sous-titre reçoit un id pour que le sommaire puisse y renvoyer (#section-3)
function sectionId(blockIndex: number) {
    return `section-${blockIndex}`;
}

// Affiche un bloc selon son type
function renderBlock(block: CourseBlock, index: number) {
    switch (block.type) {
        case "heading":
            return (
                <h3 key={index} id={sectionId(index)} className={styles.heading}>
                    {block.content}
                </h3>
            );
        case "text":
            return (
                <p key={index} className={styles.text}>
                    <InlineText text={block.content} />
                </p>
            );
        case "code":
            return <CodeBlock key={index} code={block.code} file={block.file} />;
        case "tip":
        case "warning":
            return <Callout key={index} variant={block.type} content={block.content} />;
    }
}

function BodyCoursePage({ steps, currentIndex, onSelectStep }: BodyCoursePageTypes) {
    const step = steps[currentIndex];
    const previous = steps[currentIndex - 1];
    const next = steps[currentIndex + 1];

    // Les sous-titres de l'étape, pour le sommaire « Dans cette étape »
    // flatMap : on renvoie [] pour ignorer un bloc, [x] pour le garder
    const headings = step.blocks.flatMap((block, index) =>
        block.type === "heading" ? [{ content: block.content, index }] : []
    );

    return (
        <section className={styles.body}>
            <article className={styles.main}>
                <header>
                    <span className={styles.stepLabel}>
                        Étape {currentIndex + 1}
                    </span>
                    <h2 className={styles.stepTitle}>
                        {step.title}
                    </h2>
                    {step.intro && (
                        <p className={styles.intro}>
                            <InlineText text={step.intro} />
                        </p>
                    )}
                </header>

                {step.blocks.map(renderBlock)}

                <div className={styles.navigation}>
                    {previous && (
                        <button type="button" className={styles.previous} onClick={() => onSelectStep(currentIndex - 1)}>
                            ← Étape {currentIndex} · {previous.label}
                        </button>
                    )}
                    {next && (
                        <button type="button" className={styles.next} onClick={() => onSelectStep(currentIndex + 1)}>
                            Étape {currentIndex + 2} · {next.label} →
                        </button>
                    )}
                </div>
            </article>

            {(headings.length > 0 || step.aside) && (
                <aside className={styles.sidebar}>
                    {headings.length > 0 && (
                        <>
                            <span className={styles.sidebarLabel}>
                                Dans cette étape
                            </span>
                            <ul className={styles.sidebarLinks}>
                                {headings.map(({ content, index }) => (
                                    <li key={index}>
                                        <a href={`#${sectionId(index)}`} className={styles.sidebarLink}>
                                            {content}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {step.aside && (
                        <div className={styles.asideCard}>
                            <strong className={styles.asideTitle}>
                                {step.aside.title}
                            </strong>
                            <p className={styles.asideText}>
                                <InlineText text={step.aside.content} />
                            </p>
                        </div>
                    )}
                </aside>
            )}
        </section>
    )
}

export default BodyCoursePage
