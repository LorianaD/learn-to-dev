import LastCourseCard from "../LastCourseCard/LastCourseCard";
import styles from "./LastCoursesSection.module.css";
import type { LastCoursesSectionTypes } from "./LastCoursesSection.types";

function LastCoursesSection({ section, courses }: LastCoursesSectionTypes) {
    // Les plus récents d'abord, et seulement les 3 derniers
    const lastCourses = [...courses]
        .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
        .slice(0, 3);

    return (
        <section className={styles.LastCoursesSection}>
            <h2 className={styles.Title}>
                { section.title }
            </h2>

            <div className={styles.Cards}>
                {lastCourses.map((course) => (
                    <LastCourseCard key={course.slug} course={course} />
                ))}
            </div>
        </section>
    )
}

export default LastCoursesSection;
