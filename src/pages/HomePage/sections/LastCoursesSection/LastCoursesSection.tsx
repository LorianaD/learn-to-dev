import { Card } from "../../../../components";
import { getCourseLocation } from "../../../../content";
import styles from "./LastCoursesSection.module.css";
import type { LastCoursesSectionTypes } from "./LastCoursesSection.types";

function LastCoursesSection({ section, courses }: LastCoursesSectionTypes) {
    const lastCourses = [...courses]
        .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
        .slice(0, 3);

    return (
        <section className={styles.LastCoursesSection}>
            <h2 className={styles.Title}>
                {section.title}
            </h2>

            <div className={styles.Cards}>
                {lastCourses.map((course) => {
                    const location = getCourseLocation(course.slug);

                    return (
                        <Card
                            key={course.slug}
                            title={course.title}
                            description={course.description}
                            breadcrumb={
                                location
                                    ? [
                                        location.category.title,
                                        location.group.title
                                    ]
                                    : undefined
                            }
                            link={{
                                to: `/cours/${course.slug}`
                            }}
                            clickable
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default LastCoursesSection;