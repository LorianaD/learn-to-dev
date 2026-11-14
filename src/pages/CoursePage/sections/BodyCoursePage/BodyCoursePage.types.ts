import type { CourseStep } from "../../../../types/course";

export interface BodyCoursePageTypes {
    steps: CourseStep[];
    currentIndex: number;
    onSelectStep: (index: number) => void;
}
