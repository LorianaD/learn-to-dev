import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Accordion from './Accordion';
import styles from './Accordion.module.css';

describe('Composant Accordion', () => {
  // TEST 1 : affichage du titre
  it('affiche le titre', () => {
    render(
      <Accordion
        title="Installation"
        isOpen={false}
        controlsId="installation"
        onToggle={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', { name: 'Installation' })
    ).toBeInTheDocument();
  });

  // TEST 2 : état fermé
  it('indique que l’accordéon est fermé', () => {
    render(
      <Accordion
        title="Installation"
        isOpen={false}
        controlsId="installation"
        onToggle={vi.fn()}
      />
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  // TEST 3 : état ouvert
  it('indique que l’accordéon est ouvert', () => {
    render(
      <Accordion
        title="Installation"
        isOpen={true}
        controlsId="installation"
        onToggle={vi.fn()}
      />
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  // TEST 4 : association au contenu
  it('possède le bon aria-controls', () => {
    render(
      <Accordion
        title="Installation"
        isOpen={false}
        controlsId="installation"
        onToggle={vi.fn()}
      />
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-controls',
      'installation'
    );
  });

  // TEST 5 : classe CSS lorsque ouvert
  it('applique la classe accordionOpen si ouvert', () => {
    render(
      <Accordion
        title="Installation"
        isOpen={true}
        controlsId="installation"
        onToggle={vi.fn()}
      />
    );

    expect(screen.getByRole('button')).toHaveClass(
      styles.accordionOpen
    );
  });

  // TEST 6 : absence de classe ouverte si fermé
  it('ne possède pas la classe accordionOpen si fermé', () => {
    render(
      <Accordion
        title="Installation"
        isOpen={false}
        controlsId="installation"
        onToggle={vi.fn()}
      />
    );

    expect(screen.getByRole('button')).not.toHaveClass(
      styles.accordionOpen
    );
  });

  // TEST 7 : événement clic
  it('appelle onToggle au clic', () => {
    const handleToggle = vi.fn();

    render(
      <Accordion
        title="Installation"
        isOpen={false}
        controlsId="installation"
        onToggle={handleToggle}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'Installation' })
    );

    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  // TEST 8 : type du bouton
  it('utilise le type button', () => {
    render(
      <Accordion
        title="Installation"
        isOpen={false}
        controlsId="installation"
        onToggle={vi.fn()}
      />
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'type',
      'button'
    );
  });
});