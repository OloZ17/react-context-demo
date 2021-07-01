import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDetail from '../UserDetail';

describe('Testing UserDetail() Component', () => {
  it('should take a snapshot', () => {
    const activeUser = { id: 0, name: '' };
    const { asFragment } = render(<UserDetail activeUser={activeUser} />);
    expect(asFragment(<UserDetail />)).toMatchSnapshot();
  });

  it('should display right detail', () => {
    const activeUser = { id: 2, name: 'Eléonore  Labanquise' };
    render(<UserDetail activeUser={activeUser} />);
    const detailTitle = screen.getByRole('heading', { level: 3 });
    expect(detailTitle).toHaveTextContent('Détail de Eléonore Labanquise');
  });
});
