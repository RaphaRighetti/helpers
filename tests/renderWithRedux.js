import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { render } from '@testing-library/react';
import rootReducer from '../../store/reducers';
import thunk from 'redux-thunk';

const renderWithRedux = (
  component,
  { initialState = {}, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {},
) => ({
  ...render(
    <Provider store={ store }>
      {component}
    </Provider>,
  ),
  store,
});

export default renderWithRedux;
