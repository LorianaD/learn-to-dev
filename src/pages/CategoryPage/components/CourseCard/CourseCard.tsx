import { Link } from "react-router"
import { Target } from "../../../../components"
import { linkIcon } from "../../../../assets"
import styles from "./CourseCard.module.css";
import type { CourseCardTypes } from "./CourseCard.types";
import { getCourse } from "../../../../content";

function CourseCard({ groupTitle, item }: CourseCardTypes) {
    const course = getCourse(item.slug);

    return (
        <article className={styles.courseCard}>
            <div className={styles.courseCardTargets}>
                <Target text={groupTitle} variant="category" />
                {course && <Target text={course.level} variant="level" />}
            </div>
            <h4 className={styles.courseCardTitle}>
                {groupTitle} — {item.label}
            </h4>

            <p className={styles.courseCardDescription}>
                {course ? course.description : 'Cours à venir.'}
            </p>

            {course && (
                <Link to={`/cours/${item.slug}`} className={styles.courseCardLink}>
                    <span>
                        Ouvrir le cours
                    </span>
                    <div className={styles.courseCardLinkIcon}>
                        <img src={linkIcon} alt="" className={styles.courseCardLinkIconImg}/>
                    </div>
                </Link>
            )}
        </article>
    )
}

export default CourseCard