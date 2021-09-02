import React from 'react';

type ButtonProps = {
  className?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
