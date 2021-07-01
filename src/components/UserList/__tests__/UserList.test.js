import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';

import UserList from '../UserList';

describe('Testing UserList() Component', () => {
  const users = [
    { name: 'Sarah Croche', id: 1 },
    { name: 'Eléonore  Labanquise', id: 2 },
    { name: 'Emma Karena', id: 3 },
    { name: 'Jean Bonnot', id: 4 },
  ];
  const selectedUser = jest.fn();
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <UserList users={users} selectedUser={selectedUser} />
    );
    expect(asFragment(<UserList />)).toMatchSnapshot();
  });

  it('should render all items', () => {
    render(<UserList users={users} selectedUser={selectedUser} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);
  });

  it('should click', () => {
    render(<UserList users={users} selectedUser={selectedUser} />);
    const toClick = screen.getByText('Sarah Croche');
    fireEvent.click(toClick);
    expect(selectedUser).toBeCalled();
  });
});
