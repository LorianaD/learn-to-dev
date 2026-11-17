import { searchIcon } from "../../../../assets/images/icons";
import { Target } from "../../../../components";
import styles from "./HeroHomePage.module.css";
import type { HeroHomePageMeta } from "./HeroHomePage.types";

function HeroHomePage({ target, title, description }: HeroHomePageMeta) {
    return (
        <section className={styles.hero}>
            <Target text={ target } variant={"home-page"}/>
            
            <h1 className={styles.title}>
                { title }
            </h1>
            <p className={styles.description}>
                { description }
            </p>

            <div className={styles.search}>
                <div className={styles.search__icon}>
                    <img src={searchIcon} alt="" />
                </div>

                <input 
                    type="text" 
                    placeholder="Rechercher un cours, une techno… (ex. useEffect, JWT, JOIN)"
                />
            </div>
        </section>
    )
}

export default HeroHomePage