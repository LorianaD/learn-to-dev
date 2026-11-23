import { conceptionIcon, databaseIcon, frameworksIcon, langagesIcon, prodIcon } from "../assets";
import type { Category, CategoryGroup } from "../types";

export const categories: Category[] = [
    {
        title: 'Langages',
        slug: 'langages',
        icon: langagesIcon,
        variant: 'langages',
        description: 'Apprenez les langages de programmation et les technologies essentielles au développement web.',

        groups: [
            // {
            //     title: 'HTML',
            //     items: [
            //         // { label: 'Les balises', slug: 'html-balises' },
            //         // { label: 'Créer un formulaire', slug: 'html-formulaire' },
            //     ],
            // },
            // {
            //     title: 'CSS',
            //     items: [],
            // },
            {
                title: 'TypeScript',
                items: [
                    { label: 'Framework front maison', slug: 'framework-front-maison' },
                ],
            },
            {
                title: 'JAVA',
                items: [
                    { label: 'Installation et configuration', slug: 'java-installation' },
                    { label: 'Créer et gérer un projet', slug: 'java-projet' },
                ],
            },
        ],
    },
    {
        title: 'Conception',
        slug: 'conception',
        icon: conceptionIcon,
        variant: 'conception',
        description: 'Découvrez les méthodes et les outils pour concevoir, organiser et modéliser vos projets.',

        groups: [
            {
                title: 'Design UI/UX',
                items: [
                    { label: 'Figma — Du Design System à la maquette', slug: 'figma-design-system' },
                ],
            },
        ],
    },
    {
        title: 'Frameworks',
        slug: 'frameworks',
        icon: frameworksIcon,
        variant: 'framework',
        description: 'Apprenez à utiliser les frameworks pour développer des applications web et leurs fonctionnalités.',

        groups: [
            {
                title: 'React',
                items: [
                    { label: 'React JS', slug: 'react-js' },
                    // { label: 'Next.js', slug: 'nextjs' },
                    // { label: 'React Native', slug: 'react-native' },
                ],
            },
            // {
            //     title: 'Node',
            //     items: [
            //         // { label: 'Node natif', slug: 'node-natif' },
            //         // { label: 'Express', slug: 'express' },
            //         // { label: 'NestJS', slug: 'nestjs' },
            //     ],
            // },
            // {
            //     title: 'Symfony',
            //     items: [
            //         // { label: 'avec Twig', slug: 'symfony-twig' },
            //         // { label: 'API REST', slug: 'symfony-api-rest' },
            //     ],
            // },
            // {
            //     title: 'Angular',
            //     items: [
            //         // { label: 'TypeScript', slug: 'angular-typescript' },
            //     ],
            // },
            {
                title: 'Vue.js',
                items: [
                    { label: 'Vue.js 3 — Les bases', slug: 'vue-js' },
                ]
            },
            {
                title: 'Spring Boot',
                items: [
                    { label: 'Créer une API REST avec Spring Boot', slug: 'spring-boot' },
                ],
            },
        ],
    },
    {
        title: 'Bases de données',
        slug: 'database',
        icon: databaseIcon,
        variant: 'database',
        description: '',

        groups: [
            {
                title: 'SQL',
                items: [
                    { label: 'Révisions et pratique', slug: 'sql-revisions' },
                ],
            },
            {
                title: 'PostgreSQL',
                items: [
                    { label: 'Installation et pratique SQL', slug: 'postgresql' },
                ],
            },
        ],
    },
    {
        title: 'Prod',
        slug: 'prod',
        icon: prodIcon,
        variant: 'prod',
        description: 'Automatisez les tests, la qualité du code et le déploiement de vos applications.',

        groups: [
            {
                title: 'CI/CD',
                items: [
                    {
                        label: 'GitHub Actions — CI/CD',
                        slug: 'github-actions-cicd',
                    },
                ],
            },
            {
                title: 'Docker',
                items: [
                    {
                        label: 'Les bases et la conteneurisation',
                        slug: 'docker',
                    },
                ],
            },
        ],
    },
];

// Retrouve la catégorie et le groupe d'un cours à partir de son slug
// ex. "react-js" → { category: Frameworks, group: React }
export function getCourseLocation(slug: string): { category: Category; group: CategoryGroup } | undefined {
    for (const category of categories) {
        for (const group of category.groups) {
            if (group.items.some((item) => item.slug === slug)) {
                return { category, group };
            }
        }
    }
    return undefined;
}
