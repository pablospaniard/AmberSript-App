import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Content from '../Content'

describe('Content should render properly', () => {
  afterEach(cleanup)

  const data = {
    recordId: 'test',
    segments: [
      {
        words: [
          {
            text: 'Hi',
            start: 0.2,
            end: 0.8
          },
          {
            text: 'welcome',
            start: 0.8,
            end: 1.5
          },
          {
            text: 'at',
            start: 1.5,
            end: 1.8
          },
          {
            text: 'Amber',
            start: 1.8,
            end: 2.1
          },
          {
            text: 'script.',
            start: 2.1,
            end: 2.6
          }
        ],
        speaker: 'Amber'
      }
    ]
  }

  it('should match snapshot', () => {
    const { container } = render(<Content data={data} />)
    expect(container.firstChild).toMatchSnapshot('Content_snapshot_1')
  })

  it('should show Spinner if loading is true', () => {
    const { getByTestId } = render(<Content loading data={data} />)
    getByTestId('spinner')
  })

  it('should show List if loading is false', () => {
    const { getByText } = render(<Content data={data} />)
    getByText('Decode')
  })
})
