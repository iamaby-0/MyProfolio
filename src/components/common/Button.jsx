import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  download,
  target,
  rel,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const classNames = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon size={size === 'sm' ? 14 : 16} className="btn-icon-arrow" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
