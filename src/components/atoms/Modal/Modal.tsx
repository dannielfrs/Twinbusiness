import React, { CSSProperties, ReactNode, memo } from 'react'
import { Dialog } from 'primereact/dialog'

interface ComponentProps {
  visible?: boolean
  onHide?: () => void // Callback to invoke when dialog is hidden
  baseZIndex?: number
  blockScroll?: boolean
  children?: ReactNode
  closable?: boolean
  dismissableMask?: boolean
  draggable?: boolean
  header?: any
  showHeader?: boolean
  maximizable?: boolean
  maximized?: boolean // When enabled, the dialog is initially displayed full screen.
  resizable?: boolean // Enables resizing of the content.
  className?: string
  maskClassName?: string
  style?: CSSProperties // Enables resizing of the content.
}

export const Modal: React.FC<ComponentProps> = memo(({
  visible,
  onHide = () => { },
  baseZIndex,
  blockScroll,
  children,
  closable,
  dismissableMask = false,
  draggable,
  header,
  showHeader,
  maximizable,
  maximized,
  resizable = false,
  className = '',
  maskClassName,
  style
}) => {
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      baseZIndex={baseZIndex}
      blockScroll={blockScroll}
      closable={closable}
      dismissableMask={dismissableMask}
      draggable={draggable}
      header={header}
      showHeader={showHeader}
      maximizable={maximizable}
      maximized={maximized}
      resizable={resizable}
      className={className}
      maskClassName={maskClassName}
      style={style}
    >
      {children}
    </Dialog>
  )
})

Modal.displayName = 'Modal'