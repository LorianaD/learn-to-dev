import { Fragment } from "react";
import { Link } from "react-router";
import { chevronLeftIcon } from "../../../assets";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbItem {
    label: string;
    to?: string;
}

interface BreadcrumbTypes {
    items: (string | BreadcrumbItem)[];
}

function Breadcrumb({ items }: BreadcrumbTypes) {
    return (
        <nav
            className={styles.breadcrumb}
            aria-label="Fil d'Ariane"
        >
            {items.map((item, index) => {
                const breadcrumb =
                    typeof item === "string"
                        ? { label: item }
                        : item;

                const isLast = index === items.length - 1;

                return (
                    <Fragment key={index}>
                        {index > 0 && (
                            <div aria-hidden="true">
                                <img
                                    src={chevronLeftIcon}
                                    alt=""
                                />
                            </div>
                        )}

                        {breadcrumb.to && !isLast ? (
                            <Link
                                to={breadcrumb.to}
                                className={
                                    index === 0
                                        ? styles.breadcrumbStart
                                        : undefined
                                }
                            >
                                {breadcrumb.label}
                            </Link>
                        ) : (
                            <span
                                className={
                                    index === 0
                                        ? styles.breadcrumbStart
                                        : undefined
                                }
                                aria-current={
                                    isLast ? "page" : undefined
                                }
                            >
                                {breadcrumb.label}
                            </span>
                        )}
                    </Fragment>
                );
            })}
        </nav>
    );
}

export default Breadcrumb;