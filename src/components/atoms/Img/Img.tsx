import React, { ReactElement, MouseEvent, ReactNode } from 'react'
import Image, { ImageProps as NextImageProps } from 'next/image'

interface ImgProps extends Omit<NextImageProps, 'alt'> {
  alt?: string
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  onError?: () => void
  priority?: boolean
  style?: React.CSSProperties
  className?: string
  children?: ReactNode
}

const Img = ({
  src,
  alt = '',
  width,
  height,
  loading = 'lazy',
  onClick,
  onError,
  priority,
  style,
  className = '',
  children,
}: ImgProps): ReactElement => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      onClick={onClick}
      onError={onError}
      priority={priority}
      style={style}
      className={className}
    >
      {children}
    </Image>
  )
}

export default Img
