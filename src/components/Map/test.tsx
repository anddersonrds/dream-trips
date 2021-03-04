import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Fortaleza',
        slug: 'fortaleza',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: '2',
        name: 'Reykjavik',
        slug: 'reykjavik',
        location: {
          latitude: 192,
          longitude: -50
        }
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/fortaleza/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
