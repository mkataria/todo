import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';

const customRender = (ui, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        {children}
      </Provider>
    ),
    ...options,
  });
};

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };