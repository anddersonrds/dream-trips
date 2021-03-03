import { render, screen } from '@testing-library/react'

import Hauhauhaoh from '.'

describe('<Hauhauhaoh />', () => {
  it('should render the ...', () => {
    const { container } = render(<Hauhauhaoh />)

    expect(
      screen.getByRole('heading', { name: /Hauhauhaoh/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
