import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from 'react-testing-library'

import reducer from '../../../store/reducers/reducer'
import { Layout } from '..'

describe('Layout should works properly', () => {
  function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store
    }
  }

  const fetchData = jest.fn()

  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = renderWithRedux(<Layout fetchData={fetchData} />)
    expect(container.firstChild).toMatchSnapshot('Layout_snapshot_1')
  })
})
