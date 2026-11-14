import { Breadcrumb, Target } from "../../../../components"
import { getCourseLocation } from "../../../../content";
import styles from "./HeaderCoursePage.module.css";
import type { HeaderCoursePageTypes } from "./HeaderCoursePage.types";

const sourceLabels = {
    claude: "Cours Claude",
    formateur: "Cours formateur",
};

function HeaderCoursePage({ course, steps, currentIndex, onSelectStep }: HeaderCoursePageTypes) {
    const location = getCourseLocation(course.slug);
    const breadcrumb = location
        ? [location.category.title, location.group.title, course.title]
        : [course.title];

    // Pourcentage de la barre de progression
    const progress = ((currentIndex + 1) / steps.length) * 100;

    return (
        <section className={styles.header}>
            <Breadcrumb items={breadcrumb} />

            <div className={styles.headerRow}>
                <div>
                    <h1 className={styles.headerTitle}>
                        {course.title}
                    </h1>
                    <div className={styles.headerBadges}>
                        {course.techno.map((techno) => (
                            <Target key={techno} text={techno} variant="category" />
                        ))}
                        {course.source && (
                            <Target text={sourceLabels[course.source]} variant="home-page" />
                        )}
                    </div>
                </div>

                <div className={styles.progress}>
                    <div className={styles.progressText}>
                        <span>Progression</span>
                        <span className={styles.progressCount}>
                            Étape {currentIndex + 1} / {steps.length}
                        </span>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </div>

            <nav className={styles.steps} aria-label="Étapes du cours">
                {steps.map((step, index) => {
                    // 3 états : déjà vue, en cours, à venir
                    const status = index < currentIndex ? "done" : index === currentIndex ? "current" : "todo";

                    return (
                        <button
                            key={step.label}
                            type="button"
                            className={`${styles.step} ${status === "current" ? styles.stepCurrent : ""}`}
                            aria-current={status === "current" ? "step" : undefined}
                            onClick={() => onSelectStep(index)}
                        >
                            <span className={`${styles.stepNumber} ${styles[`stepNumber--${status}`]}`}>
                                {index + 1}
                            </span>
                            {step.label}
                        </button>
                    )
                })}
            </nav>
        </section>
    )
}

export default HeaderCoursePage
