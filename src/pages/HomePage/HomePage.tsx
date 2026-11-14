import { categories, courses } from "../../content"
import { HomePageData } from "./HomePage.data"
import { CategorySection, HeroHomePage, LastCoursesSection } from "./sections"

function HomePage() {
    const page = HomePageData;
    return (
        <>
            <HeroHomePage 
                target={page.heroHomePage.target} 
                title={page.heroHomePage.title} 
                description={page.heroHomePage.description}
            />

            <CategorySection categories={categories} />

            <LastCoursesSection section={page.lastCoursesHomePage} courses={courses} />
        </>
    )
}

export default HomePage