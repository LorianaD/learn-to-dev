import type { CourseMeta, CourseStep } from "../../../../types/course";

export interface HeaderCoursePageTypes {
    course: CourseMeta;
    steps: CourseStep[];
    currentIndex: number;                  // index de l'étape affichée (0 = première)
    onSelectStep: (index: number) => void;
}
