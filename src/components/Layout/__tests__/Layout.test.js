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

  const data = {
    recordId: 'test'
  }

  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = renderWithRedux(
      <Layout fetchData={fetchData} data={data} />
    )
    expect(container.firstChild).toMatchSnapshot('Layout_snapshot_1')
  })

  it('should show List if loading is false', () => {
    const { getByText } = render(<Layout fetchData={fetchData} data={data} />)
    getByText('Decode')
  })
})
