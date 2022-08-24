import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should renders correctly', async () => {
    render(<Button />)

    expect(
      await screen.findByRole('button', {
        name: /hello/i,
      }),
    ).toBeInTheDocument()
  })
})
