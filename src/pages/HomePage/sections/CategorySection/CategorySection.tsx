import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./CategorySection.module.css";
import type { CategorySectionTypes } from "./CategorySection.types";

function CategorySection({ categories }: CategorySectionTypes) {
    return (
        <section className={styles.categorySection}>
            <div className={styles.categorySectionCards}>
                {categories.map((category) => (
                    <CategoryCard key={category.slug} category={category} />
                ))}
            </div>
        </section>
    )
}

export default CategorySection;
