import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Card from "./Card";
import styles from "./Card.module.css";

// React Router est nécessaire pour tester les liens.
function renderCard(props: React.ComponentProps<typeof Card>) {
    return render(
        <MemoryRouter>
            <Card {...props} />
        </MemoryRouter>
    );
}

describe("Composant Card", () => {

    // TEST 1 : titre
    it("affiche le titre de la carte", () => {
        renderCard({ title: "Langages" });

        expect(
            screen.getByRole("heading", { name: "Langages" })
        ).toBeInTheDocument();
    });

    // TEST 2 : description
    it("affiche la description", () => {
        renderCard({
            title: "Langages",
            description: "Apprendre les langages du web.",
        });

        expect(
            screen.getByText("Apprendre les langages du web.")
        ).toBeInTheDocument();
    });

    // TEST 3 : description par défaut
    it("affiche une description par défaut si elle est absente", () => {
        renderCard({ title: "Langages" });

        expect(
            screen.getByText("Description à venir.")
        ).toBeInTheDocument();
    });

    // TEST 4 : icône
    it("affiche une icône lorsqu'elle est fournie", () => {
        const { container } = renderCard({
            title: "Conception",
            icon: "/icons/conception.svg",
            iconVariant: "conception",
        });

        const icon = container.querySelector(
            'img[src="/icons/conception.svg"]'
        );

        expect(icon).toBeInTheDocument();
    });

    // TEST 5 : absence d'icône
    it("n'affiche pas IconStack si aucune icône n'est fournie", () => {
        const { container } = renderCard({
            title: "React JS",
        });

        expect(
            container.querySelector("img")
        ).not.toBeInTheDocument();
    });

    // TEST 6 : targets supérieurs
    it("affiche les targets du haut", () => {
        renderCard({
            title: "React JS",
            targets: [
                { text: "React", variant: "category" },
                { text: "Débutant", variant: "level" },
            ],
        });

        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("Débutant")).toBeInTheDocument();
    });

    // TEST 7 : targetsLanguages
    it("affiche les technologies sous la description", () => {
        renderCard({
            title: "Langages",
            targetsLanguages: [
                { text: "TypeScript", variant: "category" },
                { text: "Java", variant: "category" },
            ],
        });

        expect(
            screen.getByText("TypeScript")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Java")
        ).toBeInTheDocument();
    });

    // TEST 8 : lien classique
    it("affiche le lien avec sa destination", () => {
        renderCard({
            title: "Langages",
            link: {
                to: "/categories/langages",
                label: "Voir les cours",
            },
        });

        expect(
            screen.getByRole("link", { name: "Voir les cours" })
        ).toHaveAttribute("href", "/categories/langages");
    });

    // TEST 9 : carte entièrement cliquable
    it("rend toute la carte cliquable", () => {
        renderCard({
            title: "React JS",
            description: "Les bases de React.",
            clickable: true,
            link: {
                to: "/cours/react-js",
            },
        });

        const link = screen.getByRole("link");

        expect(link).toHaveAttribute(
            "href",
            "/cours/react-js"
        );

        expect(
            within(link).getByRole("heading", {
                name: "React JS",
            })
        ).toBeInTheDocument();

        expect(link).toHaveClass(styles.cardClickable);
    });

    // TEST 10 : absence de lien
    it("n'affiche aucun lien si la prop link est absente", () => {
        renderCard({
            title: "Cours à venir",
        });

        expect(
            screen.queryByRole("link")
        ).not.toBeInTheDocument();
    });
});