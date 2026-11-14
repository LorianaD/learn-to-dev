import CourseCard from "../CourseCard/CourseCard";
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
                {group.items.map((item) => (
                    <CourseCard key={item.slug} groupTitle={group.title} item={item} />
                ))}                
            </div>

        </section>
    )
}

export default CategorySection;