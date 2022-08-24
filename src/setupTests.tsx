import * as NextImage from 'next/image'
import '@testing-library/jest-dom/extend-expect'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: NextImage.ImageProps) => {
    return <OriginalNextImage {...props} unoptimized />
  },
})
