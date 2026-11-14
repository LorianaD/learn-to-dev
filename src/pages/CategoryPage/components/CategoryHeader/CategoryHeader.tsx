import { useState } from "react";
import { Breadcrumb, Button, IconStack } from "../../../../components";
import styles from "./CategoryHeader.module.css";
import type { CategoryHeaderTypes } from "./CategoryHeader.types";

function CategoryHeader({title, description, icon, variant, groups}:CategoryHeaderTypes) {
    const [selected, setSelected] = useState<string>("Tout");
    
    return (
        <div className={styles.categoryHeader}>
            <Breadcrumb items={["Accueil", title]} />

            <div className={styles.Header}>
                {icon && (
                    <IconStack src={icon} variant={variant}/>
                )}
                <div>
                    <h2 className={styles.HeaderTitle}>
                        { title }
                    </h2>
                    <p className={styles.HeaderDescription}>
                        { description }
                    </p>
                </div>
            </div>

            <ul className={styles.filters}>
                <li>
                    <Button label="Tout" variant="filter" active={selected === "Tout"} onClick={() => setSelected("Tout")} />
                </li>

                {groups.map((group) => (
                    <li key={group.title}>
                        <Button label={group.title} variant="filter" active={selected === group.title} onClick={() => setSelected(group.title)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryHeader;