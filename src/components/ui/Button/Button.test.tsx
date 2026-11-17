import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import Button from './Button';
import styles from './Button.module.css';

describe('Composant Button', () => {
  // TEST 1 : affichage du label
  it('affiche le texte du bouton', () => {
    render(<Button label="Enregistrer" />);

    expect(
      screen.getByRole('button', { name: 'Enregistrer' })
    ).toBeInTheDocument();
  });

  // TEST 2 : type par défaut
  it('utilise le type button par défaut', () => {
    render(<Button label="Cliquer" />);

    expect(screen.getByRole('button')).toHaveAttribute(
      'type',
      'button'
    );
  });

  // TEST 3 : type submit
  it('accepte le type submit', () => {
    render(<Button label="Envoyer" type="submit" />);

    expect(screen.getByRole('button')).toHaveAttribute(
      'type',
      'submit'
    );
  });

  // TEST 4 : type reset
  it('accepte le type reset', () => {
    render(<Button label="Réinitialiser" type="reset" />);

    expect(screen.getByRole('button')).toHaveAttribute(
      'type',
      'reset'
    );
  });

  // TEST 5 : variante par défaut
  it('applique la variante primary par défaut', () => {
    render(<Button label="Valider" />);

    expect(screen.getByRole('button')).toHaveClass(
      styles.primary
    );
  });

  // TEST 6 : variante secondaire
  it('applique la variante secondary', () => {
    render(<Button label="Annuler" variant="secondary" />);

    expect(screen.getByRole('button')).toHaveClass(
      styles.secondary
    );
  });

  // TEST 7 : état actif
  it('indique correctement son état actif', () => {
    render(<Button label="Filtrer" active />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(button).toHaveClass(styles.active);
  });

  // TEST 8 : événement clic
  it('exécute onClick lorsque le bouton est cliqué', () => {
    const handleClick = vi.fn();

    render(
      <Button label="Enregistrer" onClick={handleClick} />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});