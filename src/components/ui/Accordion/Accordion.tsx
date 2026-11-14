import { chevronIcon } from "../../../assets";
import type { AccordionTypes } from "./Accordion.types";
import styles from "./Accordion.module.css";

function Accordion({ title, isOpen, controlsId, onToggle }: AccordionTypes) {
    return (
        <button
            type="button"
            className={`${styles.accordion} ${isOpen ? styles.accordionOpen : ''}`}
            aria-expanded={isOpen}
            aria-controls={controlsId}
            onClick={onToggle}
        >
            <img src={chevronIcon} alt="" className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ''}`}/>

            <span>
                {title}
            </span>
        </button>
    )
}

export default Accordion;