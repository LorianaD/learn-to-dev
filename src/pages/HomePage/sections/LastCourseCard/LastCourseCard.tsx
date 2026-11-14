import { Link } from "react-router"
import { Breadcrumb } from "../../../../components"
import styles from "./LastCourseCard.module.css";
import type { LastCourseCardTypes } from "./LastCourseCard.types";
import { getCourseLocation } from "../../../../content";

function LastCourseCard({ course }: LastCourseCardTypes) {
    // ex. ["Frameworks", "React"]
    const location = getCourseLocation(course.slug);

    return (
        <Link to={`/cours/${course.slug}`}>
            <article className={styles.courseCard}>
                {location && (
                    <div className={styles.courseCardTargets}>
                        <Breadcrumb items={[location.category.title, location.group.title]} />
                    </div>
                )}

                <h4 className={styles.courseCardTitle}>
                    {course.title}
                </h4>

                <p className={styles.courseCardDescription}>
                    {course.description ?? 'Description à venir.'}
                </p>
            </article>
        </Link>
    )
}

export default LastCourseCard