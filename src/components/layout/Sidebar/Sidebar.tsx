import { NavLink } from "react-router";
import { SidebarData } from "./Sidebar.data";
import styles from "./Sidebar.module.css";
import { Accordion } from "../../ui";
import { useState } from "react";
import { categories } from "../../../content";

function Sidebar() {
    const { title } = SidebarData;
    const [openSlug, setOpenSlug] = useState<string | null>(null);

    return (
        <div className={styles.sidebar}>
            <span className={styles.sidebarTitle}>
                {title}
            </span>

            {categories.map((category) => (
                <div key={category.title} className={styles.category}>
                    <Accordion
                        title={category.title}
                        isOpen={openSlug === category.slug}
                        controlsId={`category-${category.slug}`}
                        onToggle={() => setOpenSlug(openSlug === category.slug ? null : category.slug)}
                    />

                    <div id={`category-${category.slug}`} className={styles.groups} hidden={openSlug !== category.slug}>
                        {category.groups.map((group) => (
                            <div key={group.title} className={styles.group}>
                                <span className={styles.groupTitle}>
                                    {group.title}
                                </span>

                                <ul className={styles.itemList}>
                                    {group.items.map((item) => (
                                        <li key={item.slug}>
                                            <NavLink
                                                to={`/cours/${item.slug}`}
                                                className={({ isActive }) =>
                                                    isActive ? `${styles.itemLink} ${styles.itemLinkActive}` : styles.itemLink
                                                }
                                            >
                                                {item.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;