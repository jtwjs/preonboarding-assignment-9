import React from 'react';
import classNames from "classnames";

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
    <button className={classNames(className, 'btn-primary')} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
