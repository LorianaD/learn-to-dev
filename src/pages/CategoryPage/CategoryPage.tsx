import { Sidebar } from "../../components";
import { CategoryPageContainer } from "./components";
import styles from "./CategoryPage.module.css";
import { useParams } from "react-router";
import { categories } from "../../content";

function CategoryPage() {
    const { slug } = useParams<{ slug: string }>();
    const category = categories.find((category) => category.slug === slug);

    if (!category) {
        return <h1>Catégorie introuvable</h1>;
    }

    return (
        <div className={styles.mainContentCategory}>
            <Sidebar />
            <CategoryPageContainer category={category}/>
        </div>
    )
}

export default CategoryPage;