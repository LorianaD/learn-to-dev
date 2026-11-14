// src/pages/CoursePage/CoursePage.tsx
import { useParams, useSearchParams } from 'react-router';
import { getCourse } from '../../content';
import styles from './CoursePage.module.css';
import { BodyCoursePage, HeaderCoursePage } from './sections';

function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourse(slug);

  // L'étape affichée est dans l'URL : /cours/react-js?etape=4
  // → on peut recharger la page ou partager le lien sans perdre l'étape
  const [searchParams, setSearchParams] = useSearchParams();

  if (!course) return <h1>Cours introuvable</h1>;

  // Cours HTML autonome (public/cours/) : affiché tel quel dans une iframe
  if (course.htmlFile) {
    return (
      <iframe
        className={styles.courseFrame}
        src={course.htmlFile}
        title={course.title}
      />
    );
  }

  const steps = course.steps ?? [];

  if (steps.length === 0) {
    return <h1>Ce cours n'a pas encore de contenu</h1>;
  }

  // "?etape=4" → index 3. Si le numéro est absent ou invalide, on reste dans les bornes.
  const stepNumber = Number(searchParams.get('etape')) || 1;
  const currentIndex = Math.min(Math.max(stepNumber, 1), steps.length) - 1;

  function goToStep(index: number) {
    setSearchParams({ etape: String(index + 1) });
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <HeaderCoursePage
        course={course}
        steps={steps}
        currentIndex={currentIndex}
        onSelectStep={goToStep}
      />
      <BodyCoursePage
        steps={steps}
        currentIndex={currentIndex}
        onSelectStep={goToStep}
      />
    </>
  );
}

export default CoursePage;
