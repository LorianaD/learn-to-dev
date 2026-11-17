import { Card } from "../../../../components";
import { getCourse } from "../../../../content";
import styles from "./CategorySection.module.css";
import type { CategorySectionTypes } from "./CategorySection.types";

function CategorySection({group}: CategorySectionTypes) {
    return (
        <section className={styles.categorySection}>
            <div className={styles.categorySectionHeader}>
                <h3 className={styles.categorySectionTitle}>
                    {group.title}
                </h3>
                <p>

                </p>
            </div>
            <div className={styles.categorySectionCards}>
                {group.items.map((item) => {
                    const course = getCourse(item.slug);

                    return (
                        <Card
                            key={item.slug}
                            title={`${group.title} — ${item.label}`}
                            description={course?.description || "Cours à venir."}
                            targets={[
                                {
                                    text: group.title,
                                    variant: "category"
                                },
                                ...(course ? [{
                                    text: course.level,
                                    variant: "level" as const
                                }] : [])
                            ]}
                            link={course ? {
                                to: `/cours/${item.slug}`,
                                label: "Ouvrir le cours"
                            } : undefined}
                        />
                    );
                })}
            </div>

        </section>
    )
}

export default CategorySection;