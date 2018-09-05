import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from 'react-testing-library'
import { rootReducer } from '../../..'
import { App } from '..'

describe('Footer should works properly', () => {
  function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store
    }
  }

  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = renderWithRedux(<App />)
    expect(container.firstChild).toMatchSnapshot('App_snapshot_1')
  })
})
