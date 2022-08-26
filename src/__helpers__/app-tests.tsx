import { ReactElement, ReactNode } from 'react'
import userEvent from '@testing-library/user-event'
import { render as rtlRender } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

import { createRouter } from './router'

import './image'

type RenderOptions = {
  router: Partial<NextRouter>
}

type Props = {
  children: ReactNode
} & RenderOptions

function ReactWrapper({ children, router }: Props) {
  return (
    <RouterContext.Provider value={createRouter(router)}>
      {children}
    </RouterContext.Provider>
  )
}

function render(ui: ReactElement, { router }: RenderOptions = { router: {} }) {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <ReactWrapper router={router}>{children}</ReactWrapper>
    ),
  })
}

export * from '@testing-library/react'
export { userEvent, render }
