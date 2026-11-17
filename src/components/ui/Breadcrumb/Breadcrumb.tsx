import { Fragment } from "react";
import { chevronLeftIcon } from "../../../assets";
import styles from './Breadcrumb.module.css';
import { Link } from "react-router";

export interface BreadcrumbItem {
    label: string;
    to?: string;
}

interface BreadcrumbTypes {
    items: BreadcrumbItem[];
}

function Breadcrumb({ items }: BreadcrumbTypes) {
    return (
        <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <Fragment key={`${item.label}-${index}`}>
                        {index > 0 && (
                            <div aria-hidden="true">
                                <img src={chevronLeftIcon} alt="" />
                            </div>
                        )}

                        {item.to && !isLast ? (
                            <Link
                                to={item.to}
                                className={
                                    index === 0
                                        ? styles.breadcrumbStart
                                        : undefined
                                }
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span
                                className={
                                    index === 0
                                        ? styles.breadcrumbStart
                                        : undefined
                                }
                                aria-current={isLast ? "page" : undefined}
                            >
                                {item.label}
                            </span>
                        )}
                    </Fragment>
                );
            })}
        </nav>
    );
}

export default Breadcrumb;