import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import WebPage from './WebPage/WebPage';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <WebPage/>
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
