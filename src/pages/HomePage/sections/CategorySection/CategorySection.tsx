import { Card } from "../../../../components";
import styles from "./CategorySection.module.css";
import type { CategorySectionTypes } from "./CategorySection.types";

function CategorySection({ categories }: CategorySectionTypes) {
    return (
        <section className={styles.categorySection}>
            <div className={styles.categorySectionCards}>
                {categories.map((category) => (
                    <Card
                        key={category.slug}
                        title={category.title}
                        description={category.description}
                        icon={category.icon}
                        iconVariant={category.variant}
                        targetsLanguages={category.groups.map((group) => ({
                            text: group.title,
                            variant: "category"
                        }))}
                        link={{
                            to: `/categories/${category.slug}`,
                            label: "Voir les cours"
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default CategorySection;