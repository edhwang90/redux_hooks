import { Provider } from 'react-redux';
import { store } from './store/store';
import { render } from '@testing-library/react';

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
};

const reduxRender = (ui, options) => 
  render(ui, { wrapper: ReduxProvider }, options);

export * from '@testing-library/react';

export { reduxRender as render };