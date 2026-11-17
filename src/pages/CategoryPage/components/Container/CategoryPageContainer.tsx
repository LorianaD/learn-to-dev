import CategoryHeader from "../CategoryHeader/CategoryHeader";
import CategorySection from "../CategorySection/CategorySection";
import type { CategoryPageContainerTypes } from "./CategoryPageContainer.types";
import styles from "./CategoryPageContainer.module.css";
import { useState } from "react";

function CategoryPageContainer({ category }: CategoryPageContainerTypes) {
    const [selectedFilter, setSelectedFilter] = useState("Tout");

    const filteredGroups =
        selectedFilter === "Tout"
            ? category.groups
            : category.groups.filter(
                (group) => group.title === selectedFilter
            );

    
    return (
        <div className={styles.mainContainer}>
            <CategoryHeader 
                title={category.title}
                description={category.description}
                icon={category.icon}
                variant={category.variant}
                groups={category.groups}
                onFilterChange={setSelectedFilter}
            />

            {filteredGroups.map((group) => (
                <CategorySection key={group.title} group={group} />
            ))}
        </div>
    )
}

export default CategoryPageContainer;