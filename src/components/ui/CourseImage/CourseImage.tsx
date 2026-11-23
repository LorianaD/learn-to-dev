import { useEffect, useState } from "react";
import styles from "./CourseImage.module.css";

interface CourseImageTypes {
    src: string;
    alt: string;
    caption?: string;
}

function CourseImage({ src, alt, caption }: CourseImageTypes) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <figure className={styles.courseImage}>
                <button
                    type="button"
                    className={styles.imageButton}
                    onClick={() => setIsOpen(true)}
                    aria-label={`Agrandir l'image : ${alt}`}
                >
                    <img src={src} alt={alt} loading="lazy" />
                </button>

                {caption && <figcaption>{caption}</figcaption>}
            </figure>

            {isOpen && (
                <div
                    className={styles.overlay}
                    role="presentation"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-label={alt}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setIsOpen(false)}
                            aria-label="Fermer l'image"
                        >
                            ×
                        </button>

                        <img src={src} alt={alt} />

                        {caption && <p>{caption}</p>}
                    </div>
                </div>
            )}
        </>
    );
}

export default CourseImage;