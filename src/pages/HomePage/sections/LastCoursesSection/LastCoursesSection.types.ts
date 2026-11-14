import type { CourseMeta } from "../../../../types/course";

export interface LastCoursesSectionTypes {
    section: {
        title: string;
    };
    courses: CourseMeta[];
}
