import { Link } from "react-router";
import { linkIcon } from "../../../assets";
import IconStack from "../IconStack/IconStack";
import Target from "../Target/Target";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import type { CardTypes } from "./Card.types";
import styles from "./Card.module.css";

function Card({
    title,
    description,
    icon,
    iconVariant,
    targets,
    targetsLanguages,
    breadcrumb,
    link,
    clickable = false,
}: CardTypes) {

    const content = (
        <article className={styles.card}>
            {breadcrumb && (
                <Breadcrumb items={breadcrumb} />
            )}

            {targets && targets.length > 0 && (
                <div className={styles.cardTargets}>
                    {targets.map((target, index) => (
                        <Target
                            key={`${target.text}-${index}`}
                            text={target.text}
                            variant={target.variant}
                        />
                    ))}
                </div>
            )}

            {icon && (
                <IconStack
                    src={icon}
                    variant={iconVariant ?? "default"}
                />
            )}

            <h4 className={styles.cardTitle}>
                {title}
            </h4>

            <p className={styles.cardDescription}>
                {description ?? "Description à venir."}
            </p>

            {targetsLanguages && targetsLanguages.length > 0 && (
                <div className={styles.cardTargetsLanguages}>
                    {targetsLanguages.map((target, index) => (
                        <Target
                            key={`${target.text}-${index}`}
                            text={target.text}
                            variant={target.variant}
                        />
                    ))}
                </div>
            )}

            {!clickable && link && (
                <Link to={link.to} className={styles.cardLink}>
                    <span>{link.label ?? "Voir les cours"}</span>
                    <div className={styles.cardLinkIcon}>
                        <img
                            src={linkIcon}
                            alt=""
                            className={styles.cardLinkIconImg}
                        />
                    </div>
                </Link>
            )}
        </article>
    );

    if (clickable && link) {
        return (
            <Link to={link.to} className={styles.cardClickable}>
                {content}
            </Link>
        );
    }

    return content;
}

export default Card;