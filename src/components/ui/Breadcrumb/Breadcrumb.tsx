import { Fragment } from "react";
import { chevronLeftIcon } from "../../../assets";
import styles from './Breadcrumb.module.css';

interface BreadcrumbTypes {
    items: string[];   // ex. ["Langages", "TypeScript"]
}

function Breadcrumb({ items }: BreadcrumbTypes) {
    return (
        <div className={styles.breadcrumb}>
            {items.map((item, index) => (
                <Fragment key={item}>
                    {/* Un chevron entre chaque élément, pas avant le premier */}
                    {index > 0 && (
                        <div>
                            <img src={chevronLeftIcon} alt="" />
                        </div>
                    )}
                    <span className={index === 0 ? styles.breadcrumbStart : undefined}>
                        {item}
                    </span>
                </Fragment>
            ))}
        </div>
    )
}

export default Breadcrumb
