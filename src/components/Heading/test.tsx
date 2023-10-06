import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Heading from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Heading />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#fafafa'
    })
  })
})
