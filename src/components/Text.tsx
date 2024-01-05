import React from 'react'
import clsx from 'clsx'

interface TextProps {
  children: string
  className?: string
  as?: 'p' | 'span'
}

export function Text({ children, className, as = 'span' }: TextProps) {
  const styles = 'text-base'

  const elements = {
    span: <span className={clsx(styles, className)}>{children}</span>,
    p: <p className={clsx(styles, className)}>{children}</p>,
  }

  return elements[as]
}
