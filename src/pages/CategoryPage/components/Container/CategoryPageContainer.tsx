import CategoryHeader from "../CategoryHeader/CategoryHeader";
import CategorySection from "../CategorySection/CategorySection";
import type { CategoryPageContainerTypes } from "./CategoryPageContainer.types";
import styles from "./CategoryPageContainer.module.css";

function CategoryPageContainer({ category }: CategoryPageContainerTypes) {
    return (
        <div className={styles.mainContainer}>
            <CategoryHeader 
                title={category.title}
                description={category.description}
                icon={category.icon}
                variant={category.variant}
                groups={category.groups}
            />

            {category.groups.map((group) => (
                <CategorySection key={group.title} group={group} />
            ))}
        </div>
    )
}

export default CategoryPageContainer;