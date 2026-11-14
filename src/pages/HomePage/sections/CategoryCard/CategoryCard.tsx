import { Link } from "react-router"
import { IconStack, Target } from "../../../../components"
import { linkIcon } from "../../../../assets"
import styles from "./CategoryCard.module.css";
import type { CategoryCardTypes } from "./CategoryCard.types";

function CategoryCard({ category }: CategoryCardTypes) {
    return (
        <article className={styles.courseCard}>
            {category.icon && (
                <IconStack src={category.icon} variant={category.variant} />
            )}

            <h4 className={styles.courseCardTitle}>
                {category.title}
            </h4>

            <p className={styles.courseCardDescription}>
                {category.description || 'Description à venir.'}
            </p>

            {category.groups.length > 0 && (
                <ul className={styles.courseCardBadges}>
                    {category.groups.map((group) => (
                        <li key={group.title}>
                            <Target text={group.title} variant="category" />
                        </li>
                    ))}
                </ul>
            )}

            <Link to={`/categories/${category.slug}`} className={styles.courseCardLink}>
                <span>
                    Voir les cours
                </span>
                <div className={styles.courseCardLinkIcon}>
                    <img src={linkIcon} alt="" className={styles.courseCardLinkIconImg}/>
                </div>
            </Link>
        </article>
    )
}

export default CategoryCard
