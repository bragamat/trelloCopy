import React, { Fragment } from 'react';

import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import ReduxToastr from 'react-redux-toastr'
import GlobalStyle from './styles/global'
const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <ReduxToastr 
        newestOnTop={false}
        preventDuplicates
        timeOut={4000}
        progressBar
        closeOnToastrClick
      />
      <GlobalStyle />
    </Fragment>
  </Provider>
)

export default App;
