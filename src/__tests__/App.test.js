import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import { UserProvider } from '../context/user';

function renderApp() {
  return render(
    <UserProvider>
      <App />
    </UserProvider>
  );
}

describe('Testing App() Component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = renderApp(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
