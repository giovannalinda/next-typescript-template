import { ReactNode } from 'react'
import { LinkProps as NextLinkProps } from 'next/link'
import { NextRouter } from 'next/router'

type LinkProps = {
  children: ReactNode
} & NextLinkProps

jest.mock('next/link', () => {
  return function Link({ children, href, ...props }: LinkProps) {
    return (
      <a href={href.toString()} {...props}>
        {children}
      </a>
    )
  }
})

export function createRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    locale: 'en-US',
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en-US',
    domainLocales: [],
    isPreview: false,
    ...router,
  }
}
