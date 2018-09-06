import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Button from '../Button'

describe('App should render properly', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = render(<Button text="add" />)
    expect(container.firstChild).toMatchSnapshot('Button_snapshot_1')
  })

  it('should show "add button" if passed text=add', () => {
    const { getByText } = render(<Button text="add" />)
    getByText('add')
  })
  it('should show "delete button" if passed text=delete', () => {
    const { getByText } = render(<Button text="delete" />)
    getByText('delete')
  })
  it('should show "edit button" if passed text=edit', () => {
    const { getByText } = render(<Button text="edit" />)
    getByText('edit')
  })
})
