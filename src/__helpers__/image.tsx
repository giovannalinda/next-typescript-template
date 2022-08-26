import { ImageProps } from 'next/image'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={props.src as string}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    )
  },
}))
