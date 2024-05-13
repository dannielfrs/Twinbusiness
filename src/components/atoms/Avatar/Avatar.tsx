import React from 'react'
import { Avatar as AvatarPrime, AvatarProps as AvatarPrimeProps } from 'primereact/avatar'

interface AvatarProps extends AvatarPrimeProps {
  imageFallback?: string
  onImageError?: () => void
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({
  icon,
  image,
  imageAlt = '',
  imageFallback,
  onImageError,
  label,
  size,
  shape,
  className = '',
}) => {
  return (
    <AvatarPrime
      icon={icon}
      image={image}
      imageAlt={imageAlt}
      imageFallback={imageFallback}
      onImageError={onImageError}
      label={label}
      size={size}
      shape={shape}
      className={className}
    />
  )
}

export default Avatar
