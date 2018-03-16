import React from 'react'
import { reduxForm } from 'redux-form'
import { Provider } from 'react-redux'
import store from '../app/store'
import startSagas from '../app/sagas'
import {HashRouter} from 'react-router-dom'

startSagas()

export const withRedux = story => <Provider store={store}>{story()}</Provider>

export const withReduxForm = formName => story => React.createElement(reduxForm({form: formName})(story))

export const withRouter = story => <HashRouter>{story()}</HashRouter>

